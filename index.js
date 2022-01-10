const conexao = require("./conexaoBanco")
const Tabelas = require("./tabelas")
const app = require("./app")

conexao.connect((erro) => {
	if (erro) {
		console.log(erro)
	} else {
		console.log("banco conectado")

		Tabelas.init(conexao)

		app.listen(3000, () => console.log("servidor rodando"))
	}
})
