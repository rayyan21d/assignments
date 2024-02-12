const express = require('express');
const zod = require("zod");
const { createTodo, updateTodo, requestTodo } = require('./types');
const { todo } = require('./schemas');
const PORT_NUMBER = 3000;
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors());



// Creates todos 
app.post('/todos', async function (req, res) {

    const payload = req.body
    const parsedPayload = createTodo.safeParse(payload)
    if (!parsedPayload.success) {
        res.status(400).json({ message: "You sent the wrong inputs" });
        return;
    } else {

        await todo.create({
            title: payload.title,
            description: payload.description,
            deadline: new Date(),
            completed: false

        })

        res.status(400).json({ message: "Your todo has been created" })

    }

})

// Requests Todos id
app.get('/todos', async function (req, res) {

    const payload = req.body
    const parsedPayload = requestTodo.safeParse(payload)
    if (false) {
        res.status(400).json({ message: "You sent the wrong inputs" });
        return;
    } else {

        const todos = await todo.find({

        })

        console.log("Just fetched data from mongodb")
        res.status(200).json({ todos, message: "You have your stuff now" });

    }


})

// Updates todos.. Fetch and edit..
app.put('/completed', async function (req, res) {

    const payload = req.body
    const parsedPayload = updateTodo.safeParse(payload)
    if (!parsedPayload.success) {
        res.status(400).json({ message: "You sent the wrong inputs" });
        return;
    } else {

        await todo.updateOne({
            _id: payload.id
        }, {
            completed: true
        })

        res.json({ message: "The todos' been marked as complete" })

    }


})


app.listen(3000, function () {
    console.log("Listening on port" + PORT_NUMBER)
})