const express = require('express');
const router = express.Router();
const app = express;

router.get('/city', async (req, res, next) => {
    res.render('/shipingCar');
})

module.exports = router;