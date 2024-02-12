const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const newAdmin = new Admin({
        username: username,
        password: password

    })

    console.log(newAdmin)

    const found = await Admin.findOne({ username: username });

    if (!found) {
        newAdmin.save().then(
            res.json("Admin is created and saved to DataBase.")
        )

    } else {
        res.json("User already exists!")
    }




});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink

    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink

    });

    console.log(newCourse);

    const found = await Course.findOne({ title: title });

    if (!found) {
        Course.save().then(
            res.json("A new Course has been created and Added to the Database")
        )

    } else {
        res.json("Course already exists!")
    }

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;