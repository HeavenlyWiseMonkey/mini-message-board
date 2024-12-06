const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages;');
    return rows;
}

async function insertMessage(text, username, added) {
    await pool.query(`INSERT INTO messages(text, username, added) VALUES ($1, $2, to_timestamp($3));` , [text, username, added]);
}

async function selectId(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
    return rows;
}

module.exports = {
    getAllMessages,
    insertMessage,
    selectId,
}