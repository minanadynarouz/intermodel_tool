import express from 'express';
import { passwordCheck } from './utils/utils.js';
import User from './models/user.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDB } from './db.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

//Connect to DB once server start
connectToDB()
  .then(() => {
    console.log("Connection to users Database Established");
  })
  .catch((error) => {
    console.error('Failed to connect to database at startup:', error);
    process.exit(1); // Exit the app if the database connection fails
  })

// Building app server routes
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     console.log('Fetched User:', users); // Log the single user
//     res.status(200).json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ message: 'Error Fetching users', error: error.message });
//   }
// });


// POST route for login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email in MongoDB
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("Invalid email");
    }

    // Compare the hashed password with the input password
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = passwordCheck(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Server Response: Invalid password");
    }

    // Create a JWT token if login is successful
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // Send the token to the client
    res.json({ success: true, token });

  } catch (error) {
    console.error('Error during login', error);
    res.status(500).send('Server error');
  }
});


// POST route for user registration
// app.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const db = getDb();
//     const existingUser = await db.collection(usersCollection).findOne({ email });

//     if (existingUser) {
//       return res.status(400).send("User already exists");
//     }

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user into MongoDB
//     const result = await db.collection(usersCollection).insertOne({
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });

//   } catch (error) {
//     console.error('Error during registration', error);
//     res.status(500).send('Server error');
//   }
// });

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
