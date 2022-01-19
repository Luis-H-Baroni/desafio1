const request = require("supertest")
const app = require("../../index")

describe("POST /tarefas", () => {
	it("status code", async () => {
		const resposta = await request(app).post("/tarefas").send({
			titulo: "teste",
			descricao: "adnajsdnjakd ",
		})

		expect(resposta.statusCode).toBe(201)
	})
	it("contem id", async () => {
		const response = await request(app).post("/tarefas", {
			titulo: "teste",
			descricao: "adnajsdnjakd ",
		})

		expect(response.body).toHaveProperty("id")
	})
})
