const Pool = require('pg').Pool

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "pinterest",
    password: "upendra_0827",
    port: 5432,
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
})

module.exports = pool