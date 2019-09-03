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
const getById = (pEmpresaId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from sponsor where id = ?', [pEmpresaId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? reject('No existe una empresa para esa id') : resolve(rows[0])
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
const update = (pId, { nombre, correo, telefono, disciplinas_patrocinio, ubicacion }) => {
    return new Promise((resolve, reject) => {
        db.get().query('update sponsor set nombre = ?, correo = ?, telefono = ?, disciplinas_patrocinio = ?, ubicacion = ? where id = ?', [nombre, correo, telefono, disciplinas_patrocinio, ubicacion, pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}
const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.get().query('delete from sponsor where id = ?', [pId], (err, result) => {
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