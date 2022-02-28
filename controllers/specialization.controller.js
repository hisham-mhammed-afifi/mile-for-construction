const Specialization = require("../models/Specialization")

const addSpecialization = async (req,res)=> {
    try {
        const specialization = await Specialization.create(req.body)
        res.status(201).send(specialization)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const getAllSpecializations = async (req, res)=> {
    try {
        const specializations = await Specialization.find({})
        res.status(200).send(specializations)
    } catch (err) {
        res.status(404).send(err.message)
    }
}

const getSpecialization = async(req,res)=> {
    try {
        const specialization = await Specialization.findOne({_id: req.params.id})
        if (!specialization) {
            return res.status(404).send("Specialization Not Found")
        }
        res.status(200).send(specialization)
    } catch (err) {
        res.status(404).send(err.message)
    }
}

const updateSpecialization = async (req,res)=> {
    try {
        const specialization = await Specialization.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).send(specialization)
    } catch (err) {
        res.status(400).send(err.message)
        
    }
}

const deleteSpecialization = async (req,res)=> {
    try {
        const specialization = await Specialization.findOneAndDelete({ _id: req.params.id})
        if (!specialization){
            return res.status(404).send("Specialization Not Found")
        }
        res.status(200).send("Successfully Deleted")
    } catch (err) {
        res.status(400).send(err.message)
    }
}


module.exports = {
    addSpecialization,
    getAllSpecializations,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization
}