const express=require("express");

const cors=require("cors");

require("dotenv").config();

const menuRoutes=require("./routes/menu");

const orderRoutes=require("./routes/orders");

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

res.send("FoodExpress Backend Running");

});

app.use("/api/menu",menuRoutes);

app.use("/api/orders",orderRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});