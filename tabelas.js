class Tabelas {
	init(conexao) {
		this.conexao = conexao
		this.criarTarefas()
	}

	criarTarefas() {
		const sql = `CREATE TABLE IF NOT EXISTS 
        Tarefas(
            id int NOT NULL AUTO_INCREMENT,
            titulo varchar(30) NOT NULL,
            descricao text NOT NULL,
            dataCriacao date NOT NULL,
            dataUpdate date NOT NULL,
			tasks json NOT NULL,
            PRIMARY KEY(id))`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro)
			} else {
				console.log("Tabela 'tarefas' criada")
			}
		})
	}
}
module.exports = new Tabelas()
