
require("dotenv").config({path:"./.env"})
const express=require("express")
const indexRouter=require("./routes/indexRouter")
const app=express();
//  server connect
require("./models/connect").mongoconnection();








//must be write second last
app.use("/api/user",indexRouter)




//server createtinf mus be in last
app.listen(process.env.PORT,()=>{
	console.log(`Server is started ${process.env.PORT}`)
})