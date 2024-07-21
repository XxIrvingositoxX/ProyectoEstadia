import VisitorModel from '../models/VisitorModel.js'

export const getAllVisitors = async (req, res) => {
    try {
        const visitors = await VisitorModel.findAll()
        res.json(visitors)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getVisitor = async (req, res) => {
    try {
        const visitor = await VisitorModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(visitor[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const createVisitor = async (req, res) => {
    try {
        await VisitorModel.create(req.body)
        res.json({
            "message": "Registro creado correctaente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const updateVisitor = async (req, res) => {
    try {
        await VisitorModel.update(req.body, {
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