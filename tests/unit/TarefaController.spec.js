const TarefaController = require("../../controllers/TarefaController")

describe("GET Tarefas", () => {
	it("retorna objeto", () => {
		const response = TarefaController.getTarefa()

		expect(typeof response).toBe("object")
	})
	it("retorna algo valido", () => {
		const response = TarefaController.getTarefa()

		expect(response).toBeDefined()
	})
})
