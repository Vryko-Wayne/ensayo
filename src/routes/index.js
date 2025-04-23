const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Ostias tio, esto es una prueba de la API de Express!');
});

module.exports = router;