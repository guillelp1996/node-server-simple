const express = require("express");
const app = express();
const os = require("os");

let {en0} = os.networkInterfaces()

app.get("/", (req,res)=>{
    console.log(req.ip);
    res.status(200).json({
        "status":"ok",
        "message":"Hello World!",
        "ip": `${req.ip}`,
        "Path": `${req.url}`
    });
})



app.listen(0,function(){
    let port = this.address().port;
    console.log(`http://localhost:${port}`);
    console.log(`http://${en0[1].address}:${port}`)
})