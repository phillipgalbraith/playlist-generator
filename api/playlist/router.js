const express = require('express')
const router = express.Router();

router.use('/', (req, res, next) => {
    res.json({ 
        'playlist': {
            "name" : "coffee time!",
            "vibe": "energized",
            "songs": [ 
                {
                    "title": "energizing song",
                    "song_id": "12kj3lhlekj3_2184h",
                    "length": 247 //in seconds
                },
            ],
        },
    })
})

module.exports = router;