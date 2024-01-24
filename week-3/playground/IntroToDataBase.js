const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require('mongoose')
const zod = require('zod')

const app = express();
app.use(express.json());


mongoose.connect('')

const Users = mongoose.model('Users', {
    email: String,
    password: String,
    name: String

})


const user = new Users({
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
})

user.save();



const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];




async function userExists(username, email, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    let userFound = false;

    const existingUser = await User.findOne({ username: username, email: email, password: password })

    if (existingUser) {
        userFound = true;
    }

    return userFound;
}

app.post("/signin", function (req, res) {


    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // Here is where you can implement OTP logic and stuff

    if (!userExists(username, email, password)) {

        const newUser = new User({
            username: username,
            email: email,
            password: password

        })

        newUser.save()


        return res.status(200).json({
            msg: "User Created successfully",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        // This token must be stored in the local Storage
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        // It throws an exception if token is not authorized
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username


        res.json({
            users: ALL_USERS.filter((user) => user.username !== username),
        });


    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => { console.log('server running at 3000') })