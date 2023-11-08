const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();


//Middleware
app.use(express.json()); //all middlewares convert to json format
app.use(cors());
app.use("/books",router); //localhost:5000/books


mongoose.connect(
    "mongodb+srv://sahiru:iTcBrvuJbI30d8Al@cluster0.lmz9bv1.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err)); 
 