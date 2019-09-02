const mysql = require('mysql');

let pool = null;

const connect = (done) => {
    pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'get_drafted',
        port: 3306
    })
    done();
}

const get = () => {
    return pool;
}

module.exports = {
    connect: connect,
    get: get
}