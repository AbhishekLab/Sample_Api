const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../midleware/joiSchemaValidation')
const backdroundImageSchema = require('../apiSchema/backgroundImagechema')
const backgroundControll = require('../controller/backgroundImageController')

router.post('/',
    joiSchemaValidation.validateBody(backdroundImageSchema.createBackgroundSchema),
    backgroundControll.createbackgroundImages);


    router.get('/',
    joiSchemaValidation.validateQueryParams(backdroundImageSchema.getBackgroundImageListSchema),
    backgroundControll.getAllBackgroundList)

module.exports = router;
