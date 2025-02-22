const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const usermodel = require('./models/user-model');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const SECRET_KEY = "Auction"; 

// Sign-in route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.json({ message: "Email is not registered" });
        }

        if (user.password !== password) {  // ❗ Consider using bcrypt for security
            return res.json({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ id: user._id, username: user.uname }, SECRET_KEY, { expiresIn: '1h' });

        console.log("User Found:", user);
        console.log("Sending Response:", { message: "Success", token, username: user.uname });

        return res.json({ message: "Success", token, username: user.uname });
    } catch (error) {
        console.error("Signin Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const newUser = await usermodel.create(req.body);
        res.json(newUser);
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Error creating user" });
    }
});



// Route to get all products

app.listen(3001, () => console.log("Server is running on port 3001"));
