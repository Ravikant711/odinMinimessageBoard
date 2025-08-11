const pool = require('./pool');

async function getAllmessages() {
  const { rows } = await pool.query("SELECT * FROM messageboard");
  return rows;
}

async function insertMessages(authorName, messageText) {
  await pool.query("INSERT INTO messageboard (text, username) VALUES ($1, $2)",
  [messageText, authorName]);
}

async function findMessage(messageId) {
  const result = await pool.query('SELECT * FROM messageboard WHERE id = $1', [messageId]);
  return result.rows[0];;
}

module.exports = {
  getAllmessages,
  insertMessages,
  findMessage
};