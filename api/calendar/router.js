const express = require('express')
const router = express.Router();

router.use('/', (req, res, next) => {
    res.json({ 
        'calendar': {
            "time": "7AM",
            "name": "coffee",
        }
    })
})

module.exports = router;