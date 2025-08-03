📦 Express User API
This is a simple Node.js and Express-based RESTful API for managing users. It connects to a MongoDB database and supports common user operations like creating, retrieving, and updating user data. The project demonstrates basic routing, controller separation, and MongoDB integration using Mongoose.

🔧 Features
✅ RESTful API built with Express

✅ Connected to MongoDB using Mongoose

✅ Modular structure using routes, controllers, and models

✅ Middleware support for express.json() and URL encoding

✅ Organized and ready for extension (e.g., auth, validation)

📁 Project Structure
pgsql
Copy
Edit
.
├── connection.js         # MongoDB connection setup
├── controllers/          # Controller logic for handling user routes
├── index.js              # Entry point of the server
├── models/               # Mongoose schema definitions
├── routes/               # Express route definitions
├── views/                # (Optional) Views or templates
├── .gitignore
├── package.json
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Avinash-maurya-07/express-user-api.git
cd express-user-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the server
bash
Copy
Edit
node index.js
Server will run at: http://localhost:3000

🛠 Example Routes
GET /users – Get all users

POST /users – Add a new user

GET /users/:id – Get a user by ID

PUT /users/:id – Update a user
