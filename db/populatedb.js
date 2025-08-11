require('dotenv').config();
const { Client } = require('pg');

// const SQL = `
//   CREATE TABLE IF NOT EXISTS messageboard (
//     id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     text TEXT NOT NULL,
//     username VARCHAR(255) NOT NULL,
//     added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
//   );

//   INSERT INTO messageboard (username, text)
//   VALUES
//     ('Ravi', 'Hello everyone!'),
//     ('Niraj', 'Keep up the amazing work, team!');
// `;

//WHERE NOT EXISTS check → only inserts if that exact row doesn’t already exist
const SQL = `
  CREATE TABLE IF NOT EXISTS messageboard (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO messageboard (username, text)
  SELECT 'Ravi', 'Hello everyone!'
  WHERE NOT EXISTS (
    SELECT 1 FROM messageboard WHERE username = 'Ravi' AND text = 'Hello everyone!'
  );

  INSERT INTO messageboard (username, text)
  SELECT 'Niraj', 'Keep up the amazing work, team!'
  WHERE NOT EXISTS (
    SELECT 1 FROM messageboard WHERE username = 'Niraj' AND text = 'Keep up the amazing work, team!'
  );
`;

async function main() {
  console.log("seeding...");
  // const connectionString = `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  const connectionString = process.env.DATABASE_URL; // render connection string

  const client = new Client({
    connectionString,
     ssl: {
      rejectUnauthorized: false, // Required for Render Postgres
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Done');
}

main();
