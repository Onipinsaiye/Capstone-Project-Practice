//import module
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/CapstoneDB")

const CapstoneSchema = new mongoose.Schema({
    blog:{
        type: String,
        require: true
    }
});

const Capstone = new mongoose.model("Capstone", CapstoneSchema);

export default Capstone;