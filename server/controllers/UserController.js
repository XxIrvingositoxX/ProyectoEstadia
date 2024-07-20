import UserModel from "../models/UserModel";

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
        res(user)
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
        req.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}