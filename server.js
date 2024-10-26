const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path")
if (process.env.NODE_ENV == "local") {
    app.use(
      cors({
        origin: "http://localhost:3000",
        credential: true,
      })
    );
  } else {
    app.use(
      cors({
        credential: true,
      })
    );
  }
  
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./portfolio/dist")));
    app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,"./","portfolio","dist", "index.html"));
    })
  }
  

app.listen(process.env.PORT || 3000, ()=>{
console.log(`server is running on port ${process.env.PORT}`)
})