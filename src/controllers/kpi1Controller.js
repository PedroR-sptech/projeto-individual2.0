var kp1Model = require("../models/kp1Model");

function listar(req, res) {
    kp1Model.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
// é aqui que chega a requisição da route que chega com o metodo GET que é para listar e fazer o select
// com o endpoint /listar
// req de requisição res de resposta

module.exports = {
    listar
}