import db from "../database/db.js";
import { DataTypes } from "sequelize";

const KeyModel = db.define('keyss', {
    nokey: {type: DataTypes.INTEGER},
    namek: {type: DataTypes.STRING},
    responsible: {type: DataTypes.STRING},
    cuantity: {type: DataTypes.STRING},
    datetodayk: {type: DataTypes.STRING},
    exitk: {type: DataTypes.STRING},
    back: {type: DataTypes.STRING},
    statek: {type: DataTypes.BOOLEAN}
},{
    timestamps: false
})

export default KeyModel;