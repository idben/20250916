import express from "express";

const app = express();

app.get("/", (req, res)=>{
  res.send("歡迎");
});

app.listen(3000, ()=>{
  console.log("server is running http://localhost:3000");
  
})