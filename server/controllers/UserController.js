import UserModel from "../models/UserModel.js";
import { Sequelize } from "sequelize";

//Trae todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Trae un usuario
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(user[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un usuario
export const createUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            "message": "Registro creado correctaente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualiza un usuario
export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
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
//Buscar usuarios
export const searchUsers = async (req, res) => {
    const { query } = req.query;
    try {
        const users = await UserModel.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { nocolleague: { [Sequelize.Op.like]: `%${query}%` } },
                    { name: { [Sequelize.Op.like]: `%${query}%` } },
                    { department: { [Sequelize.Op.like]: `%${query}%` } },
                    { rol: { [Sequelize.Op.like]: `%${query}%` } }
                ]
            }
        });
        res.json(users);
    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        res.status(500).json({ error: error.message });
    }
}
//Filtrar usuarios
export const filterUsers = async (req, res) => {
    const { state } = req.query;
    try {
        const users = await UserModel.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {state: state === 'Activo'}
                ]
            }
        });
        res.json(users);
    } catch (error) {
        console.log("Error filtrando usuarios: ", error);
        res.status(500).json({ error: error.message });
    }
}