import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors'

//configure env
dotenv.config();

//database config
connectDB();
//rest object
const app=express();

//middlewares 
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//routes
app.use("/api/v1/auth",authRoutes);

//rest api
app.get("/",function(request,response){
    response.send({
        meassage:"Welcome to our app"
    });
});
const PORT=process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log("Server started on port 3001");
  });