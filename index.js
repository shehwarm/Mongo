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

User.updateMany( {age: {$gt: 21}}, {age: 20})
.then(res => console.log(res))
.catch(err => console.log(err));

/*User.updateOne({name: "shehwar"}, {age: 30})
.then(res => console.log(res))
.catch(err => console.log(err));

User.findOne({age : {$gt: 21}})
.then((res) => console.log(res))
.catch((err) => console.log(err));

User.insertMany([
    {name:"shehwar", email:"shehwar@", age:20},
    {name:"ali", email:"ali@", age:22},
    {name:"ahmed", email:"ahmed@", age:24},
]).then((res) => console.log(res))
.catch((err) => console.log(err));



const user2 = new User({
    name: "Ali",
    age: 22,
    email: "ali.com",
});
user2.save()
.then((res) => console.log("user created"))
.catch((err) => console.log(err));*/