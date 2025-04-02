const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // e.g., 'ANAS_BUTT\\MYSQLSERVERDB'
    database: process.env.DB_NAME, // 'HOSPITAL'
    port: parseInt(process.env.DB_PORT), // 1433
    options: {
        encrypt: false, // Adjust based on your setup
        trustServerCertificate: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed:', err);
        throw err;
    });

module.exports = { sql, poolPromise };