import VisitorModel from '../models/VisitorModel.js'
import { Sequelize } from 'sequelize'

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
export const countVisitorsByState = async (req, res) => {
    try {
        const activeCount = await VisitorModel.count({ where: { statev: true } });
        res.json({ activeCount })
    } catch (error) {
        res.json({message: error.message});
    }
}
export const searchVisitor = async (req, res)=> {
    const { query } = req.query;
    try {
        const visitors = await VisitorModel.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { namev: { [Sequelize.Op.like]: `%${query}%` } },
                    { company: { [Sequelize.Op.like]: `%${query}%` } },
                    { identification: { [Sequelize.Op.like]: `%${query}%` } },
                    { datetodayv: { [Sequelize.Op.like]: `%${query}%` } },
                    { entrancev: { [Sequelize.Op.like]: `%${query}%` } },
                    { exitv: { [Sequelize.Op.like]: `%${query}%` } }
                ]
            }
        });
        res.json(visitors)
    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        res.status(500).json({ error: error.message });
    }
}