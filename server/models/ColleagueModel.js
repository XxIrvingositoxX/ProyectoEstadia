import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ColleagueModel = db.define('colleagues', {
    nocolleaguec: { type: DataTypes.INTEGER },
    namec: { type: DataTypes.STRING },
    departmentc: { type: DataTypes.STRING },
    datetodayc: { type: DataTypes.STRING },
    datetodayexitc: {type: DataTypes.STRING},
    entrancec: { type: DataTypes.STRING },
    exitc: { type: DataTypes.STRING },
    state: { type: DataTypes.BOOLEAN }
}, {
    timestamps: false
})

export default ColleagueModel;