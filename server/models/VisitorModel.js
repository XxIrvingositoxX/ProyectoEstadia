import db from "../database/db.js";
import { DataTypes } from "sequelize";

const VisitorModel = db.define('visitors', {
    namev: {type: DataTypes.STRING},
    company: {type: DataTypes.STRING},
    identification: {type: DataTypes.STRING},
    comments: {type: DataTypes.STRING},
    datetodayv: {type: DataTypes.STRING},
    entrancev: {type: DataTypes.STRING},
    exitv: {type: DataTypes.STRING},
    statev: {type: DataTypes.BOOLEAN}
},{
    timestamps: false
})

export default VisitorModel;