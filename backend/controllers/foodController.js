import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;


    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" })
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// remove food item
const removeFood = async (req, res) => {
    try {
        let id = req.params.id
        const food = await foodModel.findById(id);
        if (!food) {
            return res.json({ success: false, message: "Food not found" })
        } else {
            fs.unlink(`uploads/${food.image}`, () => { })
            await foodModel.findByIdAndDelete(id);
            return res.json({ success: true, message: "Food Deleted" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Food not deleted" })
    }
}

// get Food item

const getFood = async(req,res)=>{
    try{
         let id = req.params.id
        const food = await foodModel.findById(id);
        if (!food) {
            return res.json({ success: false, message: "Food not found" })
        }
        res.json({success:true,data: food})
    }catch(error){
        console.log(error);
        res.json({ success: false, message: "Food not retrive" })
    }
}
export { addFood, listFood, removeFood ,getFood}