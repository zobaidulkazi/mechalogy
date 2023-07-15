import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [ true, "Please provide a Username"],
        unique: true,

    },
    email: {
        type: String,
        require: [true, "Please provide an Email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please provide a Password"],
        unique: true,
    
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyTokenExpiry: Date,



})




const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;