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