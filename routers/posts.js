// richiamiamo istanza di framework express
const express = require('express');
// creazione istanza dell'oggetto rotte di express
const router = express.Router();

//importo i dati dei blog ****BONUS****
const blogList = require('../data/posts');

//rotte di CRUD(Create-Read-Update-Delete)
// INDEX (GET)
router.get('/', function (req, res) {
    res.json(blogList);
});

// SHOW (GET)
router.get('/:id', function (req, res) {
    const post = blogList.find(p => p.id == req.params.id);
    res.json(post);
});

// CREATE (POST)
router.post('/', function (req, res) {
    res.send('<h1>Creazione del mio blog</h1>');
});

// UPDATE (PUT)
router.put('/:id', function (req, res) {
    res.send('<h1>Modifica integrale del mio blog</h1>' + req.params.id);
});

// MODIFY (PATCH)
router.patch('/:id', function (req, res) {
    res.send('<h1>Modifica parziale del mio blog</h1>' + req.params.id);
});

// DESTROY (DELETE)
router.delete('/:id', function (req, res) {
    res.send('<h1>Eliminazione del mio blog</h1>' + req.params.id);
});

// esportazione dell'intera istanza
module.exports = router;
