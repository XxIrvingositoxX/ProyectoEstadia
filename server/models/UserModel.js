import db from "../database/db";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    nocolleague: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    department: { type: DataTypes.STRING },
    rol: { type: DataTypes.STRING },
    state: { type: DataTypes.BOOLEAN }
})

export default UserModel;