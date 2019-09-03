let express = require('express');
let router = express.Router();
let atletaModel = require('../../models/atletas');

router.use((req, res, next) => {
    if (req.query.format === 'json') {
        next();
    } else {
        res.json({ mensaje: 'El formato de la peticion debe ser JSON' })
    }
})
// http://localhost:3000/api/atletas
router.get('/', (req, res) => {
    atletaModel.getAll()
        .then(rows => res.json(rows))
        .catch(err => res.json(err))
});
router.post('/', (req, res) => {
    atletaModel.insert(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;