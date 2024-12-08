require('dotenv').config();
const { Client } = require('pg');

const now = Date.now() / 1000.0;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    username VARCHAR ( 255 ),
    added TIMESTAMPTZ
);

INSERT INTO messages (text, username, added) 
VALUES
    ('Hello', 'Amando', to_timestamp(${now})),
    ('What''s up?', 'Charles', to_timestamp(${now})),
    ('How are you?', 'Jim', to_timestamp(${now})),
    ('Good day', 'Bob', to_timestamp(${now})),
    ('Hi', 'Jess', to_timestamp(${now}));
`;

// const deleteMessages = `
// TRUNCATE TABLE messages RESTART IDENTITY;
// `;

// const getAllMessages = `
// SELECT * FROM messages;
// `;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    // const { rows } = await client.query(getAllMessages);
    // console.log(rows);
    // await client.query(deleteMessages);
    await client.end();
    console.log('done');
}

main();