const express = require("express")
const tarefas = require("./tarefasRoute")

module.exports = (app) => {
	app.use(express.json(), tarefas)
}
