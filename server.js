import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();





app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});

// //const express= require("express");
// import express from 'express';
// import mongoose from "mongoose";
// import path from 'path';
// // import { sendCookie } from "./utils/features.js";
// // import cookieParser from 'cookie-parser';
// // import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// const app = express();


// mongoose.connect("mongodb://127.0.0.1:27017",{
//     dbName : "backendapi",
// })
// .then(()=> console.log("Dtabase conceted"))
// .catch((e)=> console.log(e))


// const Schema = new mongoose.Schema({
//     name : {
//       type: String,
//       required: true,
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

// const userinfo = mongoose.model("userinfo",Schema);



// //static file serving using middleware.
// app.use(express.static(path.join(path.resolve(),'public')));

// //After sumit form This 'post' midleware is activate on repetive url.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // setting up Views engine.
// app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render('login');

// });

// app.get("/login",(req,res)=>{
//   res.render('login');

// });

// app.get("/register",(req,res)=>{
//   res.render('register');

// });

// app.get("/home",(req,res)=>{
//   res.render('home');

// });



// app.get("/users/all", async (req,res)=>{
//   const users = await userinfo.find({})
//   console.log(req.query);
//   res.json({
//       success:true,
//       users,
//   });

// });

// app.get("/usersid", async (req,res)=>{
//   const {id} = req.query;
//   const user = await userinfo.findById(id);

//   res.json({
//       success:true,
//       user,
//   });
// });

// app.get("/usersid/:id", async (req,res)=>{
//   const {id} = req.query;
//   const user = await userinfo.findById(id);
//   console.log(req.params);
//   res.json({
//       success:true,
//       user,
//   });
// });



// app.post("/login" ,async (req, res) => {
//   // try {
//     const { email, password } = req.body;

//     const user = await userinfo.findOne({ email }).select("+password");

//     if (!user)
//      return res.status(404).json({
//       success:false,
//       message: 'Invalid Email or Password'
//     });

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log(password);
//     console.log(user.password);
//     // const isMatch = (password === user.password)


//     if (!isMatch){
//       //return next(new ErrorHandler("Invalid Email or Password", 400));
//       return res.status(404).json({
//         success:false,
//         message: 'Invalid Email or Password'
//       });
//     }

//     // sendCookie(user, res, `Welcome back, ${user.name}`, 200);
//   // } catch (error) {
//   //   next(error);
//   // }


// //   res.status(201).cookie("tempERY","loFGHl").json({
// //     success:true,
// //     massage:"LOGIN successfully",
// // });


// res.cookie("token",{
//   httpOnly:true,
//   maxAge: 2 * 60 * 1000,
// })
// res.redirect('/home');


// });


// app.post("/register", async (req, res) => {
//     // try {
//       const { name, email, password } = req.body;
  
//       let user = await userinfo.findOne({ email });
  
//       if (user) 
//         return res.status(404).json({
//           success:false,
//           message: 'User already exists'
//         });
//         // return next(new ErrorHandler("User Already Exist", 400));
  
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       user = await userinfo.create({ name, email, password:hashedPassword });
//       console.log(user);

//       // const token = jwt.sign({ _id: user._id },'ghhjkbfhgdf');
//       // res
//       //   .status(statusCode)
//       //   .cookie("token", token, {
//       //     httpOnly: true,
//       //     maxAge: 15 * 60 * 1000,
//       //   })

      
//       // sendCookie(user, res, "Registered Successfully", 201);
//     // } catch (error) {
//     //   next(error);
//     // };

//   //   res.status(201).cookie("tempERY","loFGHl").json({
//   //     success:true,
//   //     massage:"registerion successfully",
//   // });

//   res.cookie("token",{
//             httpOnly:true,
//             maxAge: 2 * 60 * 1000,
//         })
//         res.redirect('/home');
//   });





// // app.post("/register", async (req,res)=>{
// //     await userinfo.create({
    
// //     name:req.body.name,
// //     email:req.body.email,
// //     password:req.body.password,
// //     });

// //     res.status(201).cookie("tempi","lol").json({
// //         success:true,
// //         massage:"Register successfully",
// //     });

// // });







// // app.post("/login",async (req,res)=>{
// //     console.log(req.body);
// //     const {email} = req.body;
// //     const isuser = await userinfo.findOne({email})
// //     console.log(isuser);
// //     if(!isuser){
// //        return res.redirect('/register');

// //     }
// //     else{
// //     // const userData = {name : req.body.name ,email:req.body.email}
// //     // const user = await userinfo.create(userData);
// //     // console.log("database created -> ",user.name);

// //     res.cookie("token",{
// //         httpOnly:true,
// //     })
// //     res.redirect('/logout');
// // }
// // });


// // app.post("/register",async (req,res)=>{
// // //    const {name,email,password} = req.body;
// //     const userData = {name : req.body.name ,email:req.body.email ,password:req.body.password}
// //     const user = await userinfo.create(userData);
// //     console.log("database created -> ",user.name);

// //     res.cookie("token",{
// //         httpOnly:true,
// //     })
// //     res.redirect('/home');
// // }
// // );



// // app.get('/logout',(req,res)=>{
// //     res.cookie("token",null,{
// //         httpOnly:true,
// //     });
// //     console.log("successfully logout");
// //     res.redirect('/');
// // })


// app.listen(8000,()=>{
//     console.log("App is listening on port no 8000");
// });













