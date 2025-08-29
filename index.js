const express = require('express');
const cors = require('cors');
const app = express();
const bfclRouter= require("./routes/test");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bfclRouter);
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})