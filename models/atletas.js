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
const insert = ({ nombre, apellidos, correo, edad, disciplina, ubicacion, sexo }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into atletas (nombre, apellidos, correo, edad, disciplina, ubicacion, sexo) values (?, ?, ?, ?, ?, ?, ?)';
        db.get().query(q, [nombre, apellidos, correo, edad, disciplina, ubicacion, sexo], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}
module.exports = {
    getAll: getAll,
    insert: insert
};