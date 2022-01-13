"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tasks", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			titulo: {
				type: Sequelize.STRING,
			},
			relevancia: {
				type: Sequelize.INTEGER,
			},
			completa: {
				type: Sequelize.BOOLEAN,
			},
			tarefa_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Tarefas", key: "id" },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Tasks")
	},
}
