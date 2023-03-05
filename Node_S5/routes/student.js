const express = require('express')
const router = express.Router()
const {save,getall,getbynom,update} = require('../service/student')



router.post('/add',save);

router.get('/',getall )

router.get('/:name', getbynom)


router.put('/:id', update)
module.exports = router