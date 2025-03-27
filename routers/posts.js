const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista dei post');
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    res.send('Dettagli dei post ' + id);
})

router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica integrale dei post ' + id);
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Modifica parziale dei post ' + id);
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.send('Eliminazione del post ' + id);
})

