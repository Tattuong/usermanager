const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const apiRouter = require("./routes/auth");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/usermanagement", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


//set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", apiRouter);

const PORT = 3002;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
