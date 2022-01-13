const express = require("express")
const routes = require("./routes/index")

const app = express()
const porta = 3000

routes(app)

app.listen(porta, () => {
	console.log(`Servidor rodando na porta ${porta}`)
})

module.exports = app
