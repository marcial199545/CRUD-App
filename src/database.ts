import mongoose from "mongoose";
import { log } from "util";

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/CrudApp", { useNewUrlParser: true });
        console.log(`>>> Database connected`);
    } catch {
        console.log("TCL: error");
    }
}
export default connect;
