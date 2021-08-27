var express = require('express');
var router = express.Router();


router.get("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "messages": []
        }
    })
})

router.post("/", (req, res)=>{
    res.json({
        "status": "succes",
        "data": {
            "Message":{
                "text": "text"
            }
        }
    })
})
module.exports = router;