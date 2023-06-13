const express = require('express')
const router = express.Router()

const {getAllPatient,addAPatient,getAPatient,editPatient,deleteAPatient,getPatient}= require('../controllers/patient')

router.route('/').get(getAllPatient).post()
router.route('/:id').get(editPatient, getAPatient).patch(editPatient, addAPatient).delete(editPatient, deleteAPatient)


module.exports=router
