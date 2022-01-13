const { Router } = require("express")
const TarefaController = require("../controllers/TarefaController")
const router = Router()

router.get("/tarefas", TarefaController.getTarefa)
router.get("/tarefas/:id", TarefaController.getTarefaId)
router.post("/tarefas", TarefaController.criarTarefa)
router.put("/tarefas/:id", TarefaController.updateTarefa)
router.delete("/tarefas/:id", TarefaController.deletaTarefa)

router.get("/tarefas/:tarefaId/tasks", TarefaController.getTask)
router.get("/tarefas/:tarefaId/tasks/:taskId", TarefaController.getTaskId)
router.post("/tarefas/:tarefaId/tasks", TarefaController.criarTask)
router.put("/tarefas/:tarefaId/tasks/:taskId", TarefaController.updateTask)
router.delete("/tarefas/:tarefaId/tasks/:taskId", TarefaController.deleteTask)

module.exports = router
