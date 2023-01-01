const express = require('express')
const router = express.Router();

router.use('/', (req, res, next) => {
    res.json({ 
        'playlist': 'playlist'
    })
})

module.exports = router;