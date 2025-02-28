require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/user-model");
/* const productRoutes = require("./routes/product-routes.js"); */
const productRoutes = require("./routes/productRoutes.js"); // ✅ Import the route


const app = express();
app.use(cors()); 
app.use(express.json());


const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/auctionDB"; // ✅ Use one DB
const SECRET_KEY = process.env.JWT_SECRET || "Auction"; 
if (typeof productRoutes === "function") {
  app.use("/api", productRoutes); // ✅ Correct Usage
} else {
  console.error("Error: productRoutes is not a function");
}


// ✅ Connect to a single MongoDB database
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

/**
 * ✅ User Signup (Register)
 */
app.post("/signup", async (req, res) => {
  try {
    const { uname, email, mno, password, role } = req.body;  
    if (!uname || !email || !mno || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new UserModel({ uname, email, mno, password, role });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * ✅ User Sign-in (Login)
 */
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({ 
      message: "Signin successful", 
      token, 
      role: user.role, 
      uname: user.uname  
    });

  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * ✅ Middleware: Authenticate JWT Token
 */
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

/**
 * ✅ Middleware: Role-Based Access
 */
const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Access Forbidden" });
    }
    next();
  };
};

/**
 * ✅ User Profile Route (Protected)
 */
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "User Profile", user: req.user });
});

/**
 * ✅ Admin-Only Route (Protected)
 */
app.delete("/delete-user/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
app.use("/api", productRoutes); // ✅ Use the route

app.post("/api/addProduct", (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json({ message: "Product added successfully", product });
});

// ✅ Start the Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
