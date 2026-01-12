import dotenv from "dotenv";
import express from "express";
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("hello server");
});
app.get("/login",(req,res)=>{
  res.send("Please login your Account")
  
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
