const express = require('express')
const router = express.Router();

router.use('/', (req, res, next) => {
    res.json({ 
        'association': {
            "song_id": "12kj3lhlekj3_2184h",
            "time": "7 AM",
            "vibe": "energized"
        }
    })
})

module.exports = router;