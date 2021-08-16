const express = require ('express');
const router = express.Router();
const coinsController = require('../../../controllers/api/v1/bday');

/* /api/v1/coins */

router.get("/", coinsController.getAll);
router.post("/",coinsController.create);

module.exports = router;