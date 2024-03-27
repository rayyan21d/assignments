"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        try {
            const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
// Create  addresses 
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        try {
            const result = yield client.query(`
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
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
// Dont provide user provided string as it is!
function insertDataUnsafe() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        try {
            const result = yield client.query(insertQuery);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
// Here preven sql injection
function insertDataSafely(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        const insertQuery = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3)';
        const values = [username, email, password];
        try {
            const result = yield client.query(insertQuery, values);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
// Query Data 
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        const queryString = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        yield client.connect();
        try {
            const result = yield client.query(queryString, values);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
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
function insertIntoAddresses(userId, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        const insertQuery = 'INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5) RETURNING *;';
        const values = [userId, city, country, street, pincode];
        try {
            const result = yield client.query(insertQuery, values);
            console.log(result);
            console.log(result.fields);
            console.log(result.rows);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
function getUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://rayyan9290:zwlFQY4xfR3u@ep-crimson-mountain-a53p41f2.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        yield client.connect();
        const queryString = `SELECT *
        FROM users u 
        JOIN addresses a ON u.id = a.id WHERE u.id = $1;`;
        const values = [userId];
        try {
            const response = yield client.query({ text: queryString, values: values, rowMode: 'array' });
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.end();
        }
    });
}
// createAddressTable().catch(console.error).then(()=>{
//     insertIntoAddresses(1, 'Hyd', 'India', 'Street 1', '54000').catch(console.error);
// })
getUserDetails(1).catch(console.error);
// insertIntoAddresses(1, 'Noida', 'Bharat', 'Street 4', '784000').catch(console.error);
