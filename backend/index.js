const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sreeparna0410:sreeparnadev@cluster0.anx47aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("Database connected successfully")
    } catch (err) {
        console.error(err);
    }
}

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3002", credentials: true }));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// Image upload
// const storage = multer.diskStorage({
//     destination: (req, file, fn) => {
//         fn(null, "images");
//     },
//     filename: (req, file, fn) => {
//         fn(null, req.body.img);
//     }
// });
// // const upload = multer({ storage: storage });
// // app.post("/api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json("Image uploaded successfully");
// });
if (process.env.NODE_ENV !== 'test') {
    connectDB();
// Start the server
const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
    connectDB();
    console.log("App is running on port " + PORT);
});
}
module.exports = app; // Exporting the app object

