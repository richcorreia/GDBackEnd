const db = require('../db');
// Recupera todos los atletas a través de una promesa
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from atletas', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}
const getById = (pAtletaId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from atletas where id = ?', [pAtletaId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? reject('No existe un atleta para esa id') : resolve(rows[0])
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
const update = (pId, { nombre, apellidos, correo, edad, disciplina, ubicacion, sexo }) => {
    return new Promise((resolve, reject) => {
        db.get().query('update atletas set nombre = ?, apellidos = ?, correo = ?, edad = ?, disciplina = ?, ubicacion = ?, sexo = ? where id = ?', [nombre, apellidos, correo, edad, disciplina, ubicacion, sexo, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}
const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.get().query('delete from atletas where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}
module.exports = {
    getAll: getAll,
    getById: getById,
    insert: insert,
    update: update,
    deleteById: deleteById
};