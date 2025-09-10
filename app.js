const express = require("express");
const path = require("path");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3056;

// EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads")); // serve uploaded files if needed

// Routes
app.use("/", studentRoutes);

app.listen(3056, () => {
  console.log(`Server running on port ${PORT}`);
});
