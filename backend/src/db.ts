import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'dbasterisk',
  password: '99276083',
  database: 'dbasterisk',
});

function connectToDatabase(): Promise<string> {
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Conexão bem-sucedida com o banco de dados!");
      }
    });
  });
}

export default connectToDatabase;
