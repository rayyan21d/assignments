import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {

    try{
        const queryString = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`;
        const values = [username, password, name];

        const result = await client.query(queryString, values);
   

        return result.rows[0];

    }catch(err){
        console.log(err);
    }
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        const queryString = `SELECT * FROM users WHERE id = $1`;
        const values = [userId];

        const result = await client.query(queryString, values);


        if (result.rows.length > 0) {
            return result.rows[0]; // Return the user data
        } 



    }catch(err){
        console.log(err);
    }

    
}
