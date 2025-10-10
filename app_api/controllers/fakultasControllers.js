const fakultas = require('../models/fakultas')

getAllFakultas = async (req,res) => {
    try {
        const result = await fakultas.find()
        res.status(200).json(result)
    } catch (error) {
        res(status(500).json({message:error}))
    }
    
}

module.exports = {getAllFakultas}