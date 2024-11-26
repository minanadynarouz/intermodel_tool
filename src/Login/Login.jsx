import React, { useState } from "react";
import axios from "axios";
import locked from '../assets/locked.svg';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(response.data);

      if (response.data.success) {
        // Handle successful login (store token, redirect, etc.)
        console.log("Login successful", response.data);
        localStorage.setItem("authToken", response.data.token);
        setIsLoggedIn(true);

      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("Error logging in", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="body-bg flex flex-col items-center justify-center px-6">
      <header className="flex flex-col items-center mb-6">
        <img src={locked} alt="Lock Icon" className="w-[80px] h-[100px]" />
      </header>

      <main className="bg-white max-w-lg w-full p-8 md:p-12 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl font-roboto text-custom-blue">Intermodal Tool</h3>
          <p className="text-sm text-custom-blue pt-2  ">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-custom-blue transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-custom-blue transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-custom-blue hover:text-custom-blue hover:underline mb-6">
                Forgot your password?
              </a>
            </div>
            <button
              className="bg-custom-red hover:bg-custom-red-hover text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>

      <footer className="text-custom-blue mt-6">
        <p>
          Don't have an account? <a href="#" className="font-bold hover:underline">Sign up</a> .
        </p>
        <div className="flex justify-center mt-4 space-x-3">
          <a href="#" className="hover:underline">Contact</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
