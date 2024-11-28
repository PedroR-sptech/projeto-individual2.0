var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});
// o /publicar é o final do endpoint
// o post é o tipo de requisição
// e o avisoController aponta para onde a requisição deve ir

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

// get serve para poder listar ou buscar dados
// post serve para enviar os dados
// put serve para atualizar os dados
// delete server para deletar os dados
// a função fetch serve para poder mandar uma requisição
// e dentro dele colocamos os endpoints, ou seja as rotas
// que é para onde o fetch tem que ir
// por meio da chave headers colocamos que a requisição está levando os dados em JSON
// e colocamos os dados catalogados de acordo com os inputs
// no arquivo app.js configuramos que todas as requisições que vierem com o caminho icnial

module.exports = router;