const query = require("./query")

class Tarefa {
	listar() {
		const sql = "SELECT * FROM Tarefas"

		return query(sql)
	}

	listarId(id) {
		const sql = `SELECT * FROM Tarefas WHERE id = ${id}`

		return query(sql, id)
	}

	adiciona(tarefa) {
		const sql = "INSERT INTO Tarefas SET ?"

		return query(sql, tarefa)
	}

	altera([tarefaUpdate, id]) {
		const sql = "UPDATE Tarefas SET ? WHERE id = ?"

		return query(sql, [tarefaUpdate, id])
	}

	deleta(id) {
		const sql = `DELETE FROM Tarefas WHERE id = ${id}`

		return query(sql, id)
	}
}

module.exports = new Tarefa()
