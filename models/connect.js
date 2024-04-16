const mongoose=require("mongoose")
exports.mongoconnection=async ()=>{
	try{
		mongoose.connect(process.env.MONGOURL);
		console.log("yes ")
	}
	catch(error)
	{
console.log(error.message)
	}
}