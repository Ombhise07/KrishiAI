//  Go to monogoose go to Quickstart and copy paste this below
const mongoose = require('mongoose');

// main()
// .then(() => {
//     console.log("connection succsessfull");
// })
// .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

// GO to Schemas to create this schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

// After defining the schema make model of it i.e Collection in SQL
// Use syntax below

const User = mongoose.model("User",userSchema);

// exporting the model
module.exports = User;