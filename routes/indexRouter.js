const express=require("express")
const router=express();
/*
*@route /api/user/
@acess public
@method GET

*/
router.get("/",(req,res,next)=>{
	res.send("hello my friend")
})
module.exports=router