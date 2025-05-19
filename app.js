const express=require("express");
const app=express();
const mongoose=require("mongoose");

// Add this route
app.get("/", (req, res) => {
    res.send("Welcome to Driftly!");
});
const port = 3000;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
});