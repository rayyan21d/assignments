const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User } = require('../db/index');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic


    console.log("Signup end point is hit")


    const username = req.body.username;
    const password = req.body.password;


    console.log(username + " " + password);
    const newUser = new User({
        username: username,
        password: password
    })


    const found = await User.findOne({ username: username })
    console.log(found);

    if (found) {
        console.log("User exists")
        res.json({ message: "The  username already exists" })
    } else {
        newUser.save().then((data, err) => {
            console.log("The user has been created and saved to the Database!")

        })
        res.json({ message: 'User created successfully' })

    }









});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router