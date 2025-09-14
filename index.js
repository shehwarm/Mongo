const mongoose = require('mongoose');

main()
.then((res) => {
    console.log("success");
})
.catch((err) => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');


}

const userSchema = new mongoose.Schema({
       name: String,
       age: Number,
       email: String,
});

const User = mongoose.model('User', userSchema);

const user2 = new User({
    name: "Ali",
    age: 22,
    email: "ali.com",
});
user2.save()
.then((res) => console.log("user created"))
.catch((err) => console.log(err));