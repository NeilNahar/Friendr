const mongoose = require("mongoose");
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { 
    type: String, 
    required: true, 
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: { 
    type: String, 
    required: true, 
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true,
    // match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("error")
      }
    },
    index: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8, 
    select: false
  },
  age: { 
    type: Number, 
    min: 18,
    max: 100
  },
  photoURL: { 
    type: String,
    // match: [/^https?:\/\/.+/, "Invalid URL format"]
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"]
  },
  about: { 
    type: String,
    maxlength: 500,
    trim: true
  },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

module.exports = { User };
