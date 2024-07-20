import { Sequelize } from "sequelize";

const db = new Sequelize('smartdb', 'root', 'paydequeso562',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;