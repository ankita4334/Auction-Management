import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema(
 {
    pname:String,
    price:Number,
    Desc:String,
    bid:Number,
    rating:Number,
    category:String,
    img:String,
 }


)
const productmodel=mongoose.model("pdata",ProductSchema)

export default productmodel;