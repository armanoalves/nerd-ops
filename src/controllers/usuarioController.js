const database = require("../models");

class UsuarioController {
    static async buscaTodosUsuarios(req, res) {
        try {
            const usuarios = await database.Usuario.findAll();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarUsuario(req, res) {
        const id = req.params.id;
        const novasInformacoes = req.body;
        try {
            await database.Usuario.update(novasInformacoes, { where: { id: Number(id) } });
            const usuarioAtualizado = await database.Usuario.findOne({ where: { id: Number(id) } });

            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarUsuario(req, res) {
        const id = req.params.id;

        try {
            await database.Usuario.destroy( { where: { id: Number(id) } });

            return res.status(200).json({ mensagem: `ID com o número ${id} foi deletado!` });
        } catch (error) {
            
        }
    }
}

module.exports = UsuarioController;