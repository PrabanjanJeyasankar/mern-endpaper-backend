const patientModel = require('../models/patient')
const path = require("path")

const getAllPatient = async (request,response)=>{
    const patient = await patientModel.find();
    try{
        response.status(200).json(patient)
    }
    catch(error){
        response.send(500).json({message : error.message})
    }
}


const addAPatient = async (request,response)=>{
    const newPatient = new patientModel({
        name : request.body.name,
        age :request.body.age,
        })
    try{
        const patient = await newPatient.save()
        response.json(patient)
    }
    catch(error)
    {
        response.json({errorMessage : error.message})
    }
    
}

const getAPatient = (request,response)=>{
    response.status(200).json(response.updatedPatient)
}


const editPatient = async(request,response)=>{
    if(request.body.name != null)
    {
        response.patient.name = request.body.name
    }

    if(request.body.age != null)
    {
        response.patient.age = request.body.age
    }

    try{
        const updatedPatient = await response.patient.save()
        response.status(200).json(updatedPatient)
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}

const deleteAPatient = async(request,response)=>{
    try{
        await response.patient.deleteOne();
        response.json({message : `Deleted the user ${response.patient.name}`})
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}

async function getPatient(request,response,next){
    let patient
    try{
        patient = await patientsModel.findById(request.params.id)
        if(patient == null)
        {
            return response.status(500).json({message: error.message})
        }
    }
    catch(error){
        return response.status(500).json({message : error.message})
    }
    response.patient = patient
    next()
}


module.exports = {getAllPatient,addAPatient,getAPatient,editPatient,deleteAPatient,getPatient}