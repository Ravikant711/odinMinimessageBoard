require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS messageboard (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO messageboard (username, text)
  VALUES
    ('Ravi', 'Hello everyone!'),
    ('Niraj', 'Keep up the amazing work, team!');
`;

async function main() {
  console.log("seeding...");
  const connectionString = `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  const client = new Client({
    connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Done');
}

main();
