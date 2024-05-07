const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const publicRoutes = require("./routes/publicRoutes");
const path = require("path"); 
require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

//Anslut till databas
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connectiong to database...");
});

//validera token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //Token

    if(token== null) res.status(401).json({ message: "Not authorized for this route! - Token missing" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if(err) return res.status(403).json({ message: "Invalid JWT"});

        req.username = username;
        next();
    });
}


app.use("/auth", authRoutes);
app.use("/protected", authenticateToken, protectedRoutes);
app.use("/public", publicRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
