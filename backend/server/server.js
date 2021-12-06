const express = require('express');
const app = express();

const PORT = 3030 || process.env.PORT;


app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/SSR/public/index.html");
})


app.listen(PORT , ()=>{
  console.log(`server running on port ${PORT}`);
})
