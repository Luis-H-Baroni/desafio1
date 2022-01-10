const express = require("express")
const Tarefa = require("./queries")
const app = express()

app.use(express.json())

app.get("/api/project", (req, res) => {
	Tarefa.listar()
		.then((resultados) => res.status(200).json(resultados))
		.catch((erros) => res.status(400).json(erros))
})

app.get("/api/project/:id", (req, res) => {
	const { id } = req.params

	Tarefa.listarId(id)
		.then((resultados) => res.status(200).json(resultados))
		.catch((erros) => res.status(400).json(erros))
})

app.post("/api/project", (req, res) => {
	let tarefa = req.body
	tarefa.tasks = JSON.stringify(tarefa.tasks)

	Tarefa.adiciona(tarefa)
		.then((resultados) => res.status(201).json(resultados))
		.catch((erros) => res.status(400).json(erros))
})

app.patch("/api/project/:id", (req, res) => {
	const { id } = req.params
	const tarefaUpdate = req.body
	if (tarefaUpdate.tasks) {
		tarefaUpdate.tasks = JSON.stringify(tarefaUpdate.tasks)
	}

	Tarefa.altera([tarefaUpdate, id])
		.then((resultados) => res.status(200).json(resultados))
		.catch((erros) => res.status(404).json(erros))
})

app.delete("/api/project/:id", (req, res) => {
	const { id } = req.params

	Tarefa.deleta(id)
		.then((resultados) => res.status(204).json(resultados))
		.catch((erros) => res.status(404).json(erros))
})

module.exports = app