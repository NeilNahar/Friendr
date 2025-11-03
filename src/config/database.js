const mongoose = require('mongoose');

const connectDB=async ()=> {
  await mongoose.connect('mongodb+srv://AmanJain:dBOMF4NpuKolsjhV@friendr.e6iqzef.mongodb.net/Friendr');
}

module.exports=connectDB


// AmanJain
// dBOMF4NpuKolsjhV