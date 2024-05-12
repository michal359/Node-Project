const pool = require('../DB_JS');

async function getUsers() {
    try {
        const sql = 'SELECT * FROM users NATURAL JOIN addresses';
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    }

}

async function getUser(id) {
    try {
        const sql = 'SELECT * FROM users NATURAL JOIN addresses where id=?';
        const result = await pool.query(sql, [id]);
        return result[0][0];
    } catch (err) {
        console.log(err);
    }
}


async function createUser(name, username, email, street, city, phone, password) {
    try {
        const sql = "INSERT INTO users (`name`, `username`, `email`, `phone`) VALUES(?, ?, ?, ?)";
        const result = await pool.query(sql, [name, username, email, phone]);
        const userId = result[0].insertId;

        const sql1 = "INSERT INTO addresses (`id`, `street`, `city`) VALUES(?, ?, ?)";
        await pool.query(sql1, [userId, street, city]);

        const sql2 = "INSERT INTO passwords (`id`, `password`) VALUES(?, ?)";
        await pool.query(sql2, [userId, password]);

        return userId; 

    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function deleteUser(id) {
    try {
       
        const sql1 = `DELETE FROM passwords WHERE id = ?`;
        await pool.query(sql1, [id]);

        const sql2 = `DELETE FROM addresses WHERE id = ?`;
        await pool.query(sql2, [id]);

        const sql = `DELETE FROM users WHERE id = ?`;
        await pool.query(sql, [id]);


    } catch (err) {
        console.error('Error deleting user:', err);
        throw err;
    }
}

async function updateUser(id, name, username, email, street, city, phone, password) {
    try {
        const sql = `UPDATE users SET name = ?, username = ?, email = ?, phone = ? WHERE id = ?`;
        await pool.query(sql, [name, username, email, phone, id]);

        const sql1 = `UPDATE addresses SET street = ?, city = ? WHERE id = ?`;
        await pool.query(sql1, [street, city, id]);

        const sql2 = `UPDATE passwords SET password = ? WHERE id = ?`;
        await pool.query(sql2, [password, id]);

    } catch (err) {
        console.error('Error updating user:', err);
        throw err;
    }
}



module.exports = { getUsers, getUser, createUser, deleteUser, updateUser }