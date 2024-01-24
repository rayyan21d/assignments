const express = require('express')
const app = express()

const z = require('zod')

const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.string()

});




app.use(express.json())

function middleware(req, res, next) {
    fetch.then()
    next()
}


app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {

    console.log(req.body)
    const response = UserSchema.safeParse(req.body)
    console.log(response);

    if (response.success) {

        const email = response.data.email;
        const password = response.data.password;

        res.send("Your email is:" + email + ". and password: " + password);
        return

    } else {
        console.log(response)
        res.status(400).json({ msg2: response.error.issues })
        return
    }


});

app.get('/requestCount', function (req, res) {
    res.status(200).json({ requestCount });
});

app.listen(3000, () => { console.log("server running on Port 3000.") })