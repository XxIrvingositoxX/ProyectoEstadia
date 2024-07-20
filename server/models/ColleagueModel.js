import db from "../database/db";
import { DataTypes } from "sequelize";

db.define('colleagues', {
    nocolleaguec: { type: DataTypes.INTEGER },
    namec: { type: DataTypes.STRING },
    departmentc: { type: DataTypes.STRING },
    datetodayc: { type: DataTypes.STRING },
    entrancec: { type: DataTypes.STRING },
    exitc: { type: DataTypes.STRING }
})