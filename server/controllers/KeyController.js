import KeyModel from '../models/KeyModel.js'

export const getAllKeys = async (req, res) => {
    try {
        const keys = await KeyModel.findAll()
        res.json(keys)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getKey = async (req, res) => {
    try {
        const key = await KeyModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(key[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const updateKey = async (req, res) => {
    try {
        await KeyModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })

    }
}