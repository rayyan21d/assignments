const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = req.headers.username;
    const pass = req.headers.password;

    console.log(user, pass, "That was password")

    const check = await Admin.findOne({ username: user, password: pass })

    console.log(check)

    if (check) {
        console.log("Authenticated")

    } else {
        console.log("Not authenticated")
        // throw new Error("A new Error has occured")
    }


}

module.exports = adminMiddleware;