const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Joder tio!!!, a tomar por saco!');
});

module.exports = router;