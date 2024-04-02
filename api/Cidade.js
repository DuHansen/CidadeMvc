const CidadeController = require('../Cidade');


class CidadeApi {
    async criarCidade(req, res) {
        const Nome = req.body.Nome
        const SiglaEstado = req.body.SiglaEstado;
        const KmQd = req.body.KmQd;
        const controller = new CidadeController();

        try {
            const cidade = controller.criarCidade(Nome, SiglaEstado, KmQd);
            return res.status(201).send(cidade);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarCidade(req, res) {
        const { Id } = req.params;
        const { Nome, SiglaEstado, KmQd } = req.body;
        const controller = new CidadeController();

        try {
            const cidade = controller.alterarUsuario(Number(Id), Nome, SiglaEstado, KmQd);
            return res.status(200).send(cidade);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarCidade(req, res) {
        const { Id } = req.params;
        const controller = new CidadeController();

        try {
            controller.deletarCidade(Number(Id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarCidade(req, res) {
        const controller = new CidadeController();

        try {
            const cidades = controller.listarCidades();
            return res.status(200).send(cidades);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = CidadeApi;