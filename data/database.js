import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Tododatabase",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};






// import mongoose from "mongoose";
// import path from 'path';

// mongoose.connect("mongodb://127.0.0.1:27017",{
//     dbName : "backendapi",
// })
// .then(()=> console.log("Dtabase conceted"))
// .catch((e)=> console.log(e))


// const Schema = new mongoose.Schema({
//     name :{
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         unique:true,
//     },
//     password:{
//         type: String,
//         select:false,
//     },
//     createAt:{
//         type: Date,
//         default:Date.now,
//     }
// });

// export const userinfo = mongoose.model("userinfo",Schema);
