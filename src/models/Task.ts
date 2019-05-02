import { Schema, model } from "mongoose";
import router from "../routes";
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    }
});
export default model("Task", TaskSchema);
