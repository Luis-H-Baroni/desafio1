const database = require("../models")

class TarefaController {
	static async getTarefa(req, res) {
		try {
			let tarefa
			let task
			let resultado = []
			let arrayIds = []

			//extrai um array de id's das linhas na tabela tarefas, para determinar a range de iteração que o proximo for realizará
			await database.Tarefas.findAll().then((result) => {
				for (let i = 0; i < result.length; i++) {
					arrayIds.push(result[i].dataValues.id)
				}
			})

			let idFinal = arrayIds.slice(-1)

			//itera a array de id's
			for (let i = arrayIds[0]; i <= idFinal; i++) {
				tarefa = await database.Tarefas.findAll({ where: { id: i } })

				//se a query de tarefas com o determinado id existir, busca a task correspondente a tarefa
				if (tarefa[0] !== undefined) {
					task = await database.Tasks.findAll({
						where: { tarefa_id: tarefa[0].dataValues.id },
					})

					//adiciona a tarefa com suas tasks na array de resultados
					resultado.push({ ...tarefa[0].dataValues, tasks: task })
				}
			}
			return res.status(200).json(resultado)
		} catch (error) {
			return res.status(404).json(error.message)
		}
	}

	static async getTarefaId(req, res) {
		const { id } = req.params
		try {
			const tarefaEncontrada = await database.Tarefas.findOne({
				where: { id: Number(id) },
			})
			const taskEncontrada = await database.Tasks.findAll({
				where: { tarefa_id: Number(id) },
			})
			res
				.status(200)
				.json({ ...tarefaEncontrada.dataValues, tasks: taskEncontrada })
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async criarTarefa(req, res) {
		const conteudoTarefa = req.body
		try {
			const tarefaCriada = await database.Tarefas.create(conteudoTarefa)
			return res.status(201).json(tarefaCriada)
		} catch (error) {
			return res.status(400).json(error.message)
		}
	}

	static async updateTarefa(req, res) {
		const { id } = req.params
		const novaInfo = req.body

		try {
			await database.Tarefas.update(novaInfo, { where: { id: Number(id) } })
			let tarefaAtualizada = await database.Tarefas.findOne({
				where: { id: Number(id) },
			})
			res.status(200).json(tarefaAtualizada)
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async deletaTarefa(req, res) {
		const { id } = req.params
		try {
			await database.Tasks.destroy({ where: { tarefa_id: Number(id) } })
			await database.Tarefas.destroy({ where: { id: Number(id) } })
			let tarefaDeletada = await database.Tarefas.findOne({
				where: { id: Number(id) },
			})
			res.status(204).json({ tarefaDeletada })
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async getTask(req, res) {
		const { tarefaId } = req.params
		try {
			const getTasks = await database.Tasks.findAll({
				where: { tarefa_id: Number(tarefaId) },
			})
			res.status(200).json(getTasks)
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async getTaskId(req, res) {
		const { tarefaId, taskId } = req.params
		try {
			const getTasks = await database.Tasks.findOne({
				where: { tarefa_id: Number(tarefaId), id: Number(taskId) },
			})
			res.status(200).json(getTasks)
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async criarTask(req, res) {
		const { tarefaId } = req.params
		const novaTask = { ...req.body, tarefa_id: Number(tarefaId) }
		try {
			const taskCriada = await database.Tasks.create(novaTask)
			return res.status(201).json(taskCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async updateTask(req, res) {
		const { tarefaId, taskId } = req.params
		const novaInfoTask = req.body

		try {
			await database.Tasks.update(novaInfoTask, {
				where: { tarefa_id: Number(tarefaId), id: Number(taskId) },
			})
			let taskAtualizada = await database.Tasks.findOne({
				where: { id: Number(taskId) },
			})
			res.status(200).json(taskAtualizada)
		} catch (error) {
			res.status(404).json(error.message)
		}
	}

	static async deleteTask(req, res) {
		const { tarefaId, taskId } = req.params
		try {
			await database.Tasks.destroy({
				where: { tarefa_id: Number(tarefaId), id: Number(taskId) },
			})

			let taskDeletada = await database.Tasks.findOne({
				where: { tarefa_id: Number(tarefaId), id: Number(taskId) },
			})
			res.status(204).json({ taskDeletada })
		} catch (error) {
			res.status(404).json(error.message)
		}
	}
}

module.exports = TarefaController
