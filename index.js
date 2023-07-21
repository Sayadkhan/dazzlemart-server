require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");

const app = express();

// variables
const port = process.env.PORT || 8000;

const uri = process.env.MONGO_URI;

// midddle ewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

// test api
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to dazzle martserver" });
});

// bypassed apis
app.use("/api/user", userRoutes);

// database
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
