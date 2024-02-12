const zod = require("zod");


// body of a Todo {
//  title: String
//  Description: String
//  Deadline: DateTime Object?
//  Class:
//
// }


const createTodo = zod.object({

    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()

})

const updateTodo = zod.object({
    id: zod.string()
})

const requestTodo = zod.object({

})



module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
    requestTodo: requestTodo
}