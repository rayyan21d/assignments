import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {

    try{

        const insertQuery = `INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [userId, title, description, false];

        const result = await client.query( insertQuery, values);
  
        if(result.rows.length > 0){
            return result.rows[0];
        }else{
            return null;
        }
        
    }catch(err){

        console.log(err);


    }
    
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {

    try{
        const updateQuery = `UPDATE todos SET done = true WHERE id = $1 RETURNING *`;
        const values = [todoId];

        const result = await client.query(updateQuery, values);
    

        if (result.rows.length > 0){
            return result.rows[0];
        }else{
            return null;
        }
      

    }catch(err){
        console.log(err);

    }

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number)  {
    try{
        const getQuery = `SELECT t.title, t.description, t.done, t.id FROM todos t WHERE user_id = $1`;
        const values = [userId];

        const result = await client.query({text: getQuery, values: values});

     
       
        if(result.rows.length > 0){
            return result.rows[0];
        }

    }catch(err){
        console.log(err);
    }


}