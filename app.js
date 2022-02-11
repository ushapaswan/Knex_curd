var express = require("express")
var app = express()
app.use(express())

var route = require("./route")
app.use("/user",route)

app.listen(8000,()=>{
    console.log("Listing to the port 8000 usha");
})
