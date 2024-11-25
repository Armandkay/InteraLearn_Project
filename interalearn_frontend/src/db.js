const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'interalearn_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

connection.end((err) => {
  if (err) {
    console.error('Error ending the connection:', err);
    return;
  }
  console.log('Database connection closed.');
});
