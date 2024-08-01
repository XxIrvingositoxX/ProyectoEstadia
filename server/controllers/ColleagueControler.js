import { Sequelize } from "sequelize";
import ColleagueModel from "../models/ColleagueModel.js";

//Trae todos los colaboradores
export const getAllColleagues = async (req, res) => {
    try {
        const colleagues = await ColleagueModel.findAll()
        res.json(colleagues)
    } catch (error) {
        res.json({ message: message.error })
    }
}

//Trae a un colaborador
export const getColleague = async (req, res) => {
    try {
        const colleague = await ColleagueModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(colleague[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un colaborador
export const updateColleague = async (req, res) => {
    try {
        await ColleagueModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Colaborador actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Contador de colaboradores
export const countColleaguesByState = async (req, res) => {
    try {
        const activeCount = await ColleagueModel.count({ where: { state: true } });
        const inactiveCount = await ColleagueModel.count({ where: { state: false } });
        res.json({ activeCount, inactiveCount });
    } catch (error) {
        res.json({ message: error.message });
    }
};
//Buscar colaboradores
export const searColleagues = async (req, res) => {
    const { query } = req.query;
    try {
        const colleagues = await ColleagueModel.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { nocolleaguec: { [Sequelize.Op.like]: `%${query}%` } },
                    { namec: { [Sequelize.Op.like]: `%${query}%` } },
                    { departmentc: { [Sequelize.Op.like]: `%${query}%` } },
                    { datetodayc: { [Sequelize.Op.like]: `%${query}%` } },
                    { datetodayexitc: { [Sequelize.Op.like]: `%${query}%` } },
                    { entrancec: { [Sequelize.Op.like]: `%${query}%` } },
                    { exitc: { [Sequelize.Op.like]: `%${query}%` } }
                ]
            }
        });
        res.json(colleagues)
    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        res.status(500).json({ error: error.message });
    }
}