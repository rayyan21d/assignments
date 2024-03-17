// write a function to create a users table in your database.
import { Client } from 'pg'
 

async function createUsersTable() {
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    await client.connect();
   try{
        const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
        console.log(result);
    }catch(err){
      
        console.log(err);
   
    } finally{
    
        await client.end();
    }
}

// Create  addresses 
async function createAddressTable() {
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    await client.connect();
   try{
        const result = await client.query(`
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(255) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );`);
        console.log(result);
    }catch(err){
      
        console.log(err);
   
    } finally{
    
        await client.end();
    }
}

// Dont provide user provided string as it is!

async function insertDataUnsafe(){
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";

    try{

        const result = await client.query(insertQuery);
        console.log(result);

    }catch(err){

        console.log(err);

    }finally{

        await client.end();

    }

    
}

// Here preven sql injection
async function insertDataSafely(username: string, email: string, password: string){
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    await client.connect();

    const insertQuery = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3)';
    const values = [username, email, password];
    try{

        const result = await client.query(insertQuery, values);
        console.log(result);

    }catch(err){

        console.log(err);

    }finally{

        await client.end();

    }

    
}


// Query Data 
async function getUser(email: string){
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    
    const queryString = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    await client.connect();

    try{
            
        const result = await client.query(queryString, values);
        console.log(result);

    }catch(err){

        console.log(err);

    }finally{

        await client.end();
    
    }



}



// Relationships and Transactions!!








// createUsersTable().catch(console.error).then( ()=>{

//     insertDataSafely('username88', 'user77@example.com', 'user_password').catch(console.error).then( () => {
//         getUser('user77@example.com').catch(console.error);

//     }

//     )

// })




// -- Query 1: Fetch user's details
// SELECT id, username, email
// FROM users
// WHERE id = YOUR_USER_ID;

// -- Query 2: Fetch user's address
// SELECT city, country, street, pincode
// FROM addresses
// WHERE user_id = YOUR_USER_ID;


// SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
// FROM users u
// JOIN addresses a ON u.id = a.user_id
// WHERE u.id = YOUR_USER_ID;

async function insertIntoAddresses(userId: number, city: string, country: string, street: string, pincode: string){
    const client = new Client({
  connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
})
    await client.connect();

    const insertQuery = 'INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5)';
    const values = [userId, city, country, street, pincode];
    try{

        const result = await client.query(insertQuery, values);
        console.log(result);

    }catch(err){

        console.log(err);

    }finally{

        await client.end();

    }

    
}


async function getUserDetails(userId: number){
    const client = new Client({
        connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })

    await client.connect();

    const queryString = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode 
        FROM users u 
        JOIN addresses a ON u.id = a.id WHERE u.id = $1;`
    const values = [userId];

    try{
        const response = await client.query(queryString, values);
        console.log(response);

    }catch(err){
        console.log(err);
    }finally{
        await client.end();
    }
}


// createAddressTable().catch(console.error).then(()=>{
//     insertIntoAddresses(1, 'Hyd', 'India', 'Street 1', '54000').catch(console.error);
// })

getUserDetails(1).catch(console.error);















