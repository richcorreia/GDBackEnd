const db = require('../db');
// Recupera todas las empresas a través de una promesa
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from sponsor', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}
const insert = ({ nombre, correo, telefono, disciplinas_patrocinio, ubicacion }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into sponsor (nombre, correo, telefono, disciplinas_patrocinio, ubicacion) values (?, ?, ?, ?, ?)';
        db.get().query(q, [nombre, correo, telefono, disciplinas_patrocinio, ubicacion], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}
module.exports = {
    getAll: getAll,
    insert: insert
};