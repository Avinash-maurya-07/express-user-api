# 📦 Express User API

A simple and modular **Node.js** + **Express** RESTful API for managing user data. It connects to a **MongoDB** database using **Mongoose**, and supports basic user operations such as creating, reading, and updating user records.

This project demonstrates good development practices like route separation, controller logic, and database abstraction — making it easy to extend and maintain.

---

## 🔧 Features

- ✅ RESTful API built with **Express**
- ✅ MongoDB integration using **Mongoose**
- ✅ Clean, modular architecture:
  - `routes/`, `controllers/`, `models/`
- ✅ Middleware for `express.json()` and URL-encoded data
- ✅ Ready to extend with features like **authentication**, **validation**, etc.

---

## 📁 Project Structure

express-user-api/

├── connection.js # MongoDB connection setup

├── controllers/ # Business logic for user operations

├── index.js # Entry point of the application

├── models/ # Mongoose schemas for MongoDB collections

├── routes/ # Route definitions for Express

├── views/ # (Optional) Templates or static views

├── .gitignore

├── package.json

## 🚀 Getting Started:
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Avinash-maurya-07/express-user-api.git
cd express-user-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Server
bash
Copy
Edit
node index.js
Server will start at: http://localhost:3000

## 🛠 API Endpoints
Method	Route	Description

GET	/users	Get all users

POST	/users	Create a new user

GET	/users/:id	Get user by ID

PUT	/users/:id	Update user by ID
