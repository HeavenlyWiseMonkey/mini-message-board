const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: (process.env.CONNECTIONSTRING) ? process.env.CONNECTIONSTRING :
    `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
});