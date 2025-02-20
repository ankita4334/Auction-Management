import express from "express"
import router from "./routers/user-router.js";
const app=express();
const PORT=3000;

app.use(router);

app.listen((PORT)=>{
    console.log(`server is running on ${PORT}`)
})