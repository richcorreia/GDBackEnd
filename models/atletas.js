const db = require('../db');
// Recupera todos los estudiantes a través de una promesa
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from atletas', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}
module.exports = {
    getAll: getAll
};