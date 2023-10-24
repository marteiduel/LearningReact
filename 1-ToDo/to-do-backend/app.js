require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;
const mysql = require("mysql2");

const queries = require("./queries");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const executeQuery = (query, params, callback) => {
  pool.query(query, params, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    callback(result);
  });
};

executeQuery(queries.getAllTodos, [], (result) => {
  console.log("All todos:", result);
});

executeQuery(queries.getAllCategories, [], (result) => {
  console.log("All categories:", result);
});
