import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    nocolleague: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    department: { type: DataTypes.STRING },
    rol: { type: DataTypes.STRING },
    state: { type: DataTypes.BOOLEAN }
},{
    timestamps: false
})

export default UserModel;