"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Tasks extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Tasks.belongsTo(models.Tarefas, { foreignKey: "tarefa_id" })
		}
	}
	Tasks.init(
		{
			titulo: DataTypes.STRING,
			relevancia: DataTypes.INTEGER,
			completa: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Tasks",
		}
	)
	return Tasks
}
