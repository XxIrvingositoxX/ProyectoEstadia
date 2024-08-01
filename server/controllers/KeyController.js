import KeyModel from '../models/KeyModel.js'
import { Sequelize } from 'sequelize'

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
//Contador de llaves
export const countKeysByState = async (req, res) => {
    try {
        const activeCount = await KeyModel.count({ where: { statek: true } });
        const inactiveCount = await KeyModel.count({ where: { statek: false } });
        res.json({ activeCount, inactiveCount });
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const searchKey = async (req, res) => {
    const { query } = req.query;
    try {
        const keys = await VisitorModel.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { nokey: { [Sequelize.Op.like]: `%${query}%` } },
                    { namek: { [Sequelize.Op.like]: `%${query}%` } },
                    { responsible: { [Sequelize.Op.like]: `%${query}%` } },
                    { cuantity: { [Sequelize.Op.like]: `%${query}%` } },
                    { datetodayk: { [Sequelize.Op.like]: `%${query}%` } },
                    { datetodayexitk: { [Sequelize.Op.like]: `%${query}%` } },
                    { exitk: { [Sequelize.Op.like]: `%${query}%` } },
                    { back: { [Sequelize.Op.like]: `%${query}%` } }
                ]
            }
        });
        res.json(keys);
    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        res.status(500).json({ error: error.message });
    }
}