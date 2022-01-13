"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Tarefas extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Tarefas.hasMany(models.Tasks, { foreignKey: "tarefa_id" })
		}
	}
	Tarefas.init(
		{
			titulo: DataTypes.STRING,
			descricao: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Tarefas",
		}
	)
	return Tarefas
}
