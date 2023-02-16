const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.status(200).json({
        "status":"ok",
        "message":"Hello World!"
    })
})



app.listen(0,function(){
    console.log(`http://localhost:${this.address().port}`)
})