import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
    acquireTimeout: 10000
  });

  console.log("Connected to the MySQL database.");
  return connection; 
};


const connection = await databaseConnection();
export {connection};
