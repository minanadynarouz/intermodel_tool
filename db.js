import mongoose from 'mongoose';

let isConnected = false;// Variable to track the connection status

// Initating connection with Database

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI is not defined');
    throw new Error('MONGBODB_URI is not defined');
  }

  if (isConnected) {
    console.log('=> using existing database connection');
    // return mongoose.connection;
  }
  try {
    console.log('Attempting to connect to DataBase...');
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('MongoDB Connected');
    // return mongoose.connection;

  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}