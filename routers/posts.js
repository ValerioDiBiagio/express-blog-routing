// express
const express = require('express');
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
});

// show
router.get('/:id', (req, res) => {
    const {id} = req.params
    res.send('Dettagli dei post ' + id);
})

// store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

// update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica integrale dei post ' + id);
})

// modify
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica parziale dei post ' + id);
})

// destroy
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Eliminazione del post ' + id);
})

// esportare router
module.exports = router;