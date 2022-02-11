var express = require("express")
var router = express.Router();

var {
    addmovie,
    movielist,
    movieupdate,
    deletedata
    
}= require("./controler/user");
var bodyParser = require("body-parser");
var urlencodeparser =bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());

// router.get("/",(req,res)=>{
//     res.send("home page is called")
// })

router.post("/add",addmovie);
router.get("/list",movielist);
router.put("/update/:id",movieupdate);
router.delete("/delete/:id",deletedata)


module.exports=router;