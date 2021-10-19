const express = require('express');
const { router } = require('json-server');
const mongoose = require("mongoose");
const path = require('path')
const app = express()

const apiRouter =  require("./routes/auth")
const connectDb = async () =>{
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/usermanagement',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}
connectDb();


app.use(express.json())
app.use('/', apiRouter)
app.use(express.static(path.join(__dirname, "public")));

//set view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const PORT = 3002;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
