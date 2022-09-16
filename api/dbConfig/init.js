const { Pool } = require("pg");

let config;

if (process.env.DATABASE_URl) {
    config = {
        connectionString: process.env.DATABASE_URl,
        ssl: {
            rejectUnauthorised: false
        }
    }
}
const pool = new Pool(config);

module.exports = pool;
