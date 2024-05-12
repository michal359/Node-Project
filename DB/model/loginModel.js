const pool = require('../DB_JS');

// async function getByUsername(username, password) {
//     try {
//         const sql = 'SELECT * FROM users WHERE username=?';
//         const result = await pool.query(sql, [username]);

//         const sql1 = 'SELECT * FROM passwords WHERE password=?';
//         const result1= await pool.query(sql1, [password]);

        
//         console.log('result',result)
//         return result[0][0];
//     } catch (err) {
//         console.log(err);
//     }
// }

async function getByQuery(query) {
  try {
    const sql = 'SELECT * FROM users NATURAL JOIN passwords NATURAL JOIN addresses WHERE username = ? AND password = ?';

      const [rows, fields] = await pool.query(sql,[query.username, query.password]);
      console.log(rows);

      return rows;
  } catch (err) {
      console.log(err);
  }

}

async function getUsername(id) {
    try {
      const sql = 'SELECT * FROM users where id=?';
  
      const result = await pool.query(sql, [id]);
  
      return result[0][0];
  
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {getByQuery, getUsername};