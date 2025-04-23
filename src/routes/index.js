const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Uy juemadre, esto es una prueba de la API de Express!');
});

module.exports = router;