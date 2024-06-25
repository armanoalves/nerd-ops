const database = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {registerValidator, loginValidator} = require('../utils/validation');

class UsuarioController {
    static async buscaTodosUsuarios(req, res) {
        try {
            const usuarios = await database.Usuario.findAll();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async registrar(req, res) {

        const {error} = registerValidator(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const emailExistente = await database.Usuario.findOne({where: {"email": req.body.email}});
        if(emailExistente) return res.status(400).send("Já existe uma conta que utiliza esse email");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.senha, salt);

        const newUser = {
            usuario: req.body.usuario,
            email: req.body.email,
            senha: hashedPassword
        }

        database.Usuario.create(newUser)
        .then(savedUser => {
            res.status(200).json({ status: "Success", new_user_id: savedUser.id });
        })
        .catch(erro => res.status(500).send(erro.message));
        
    }

    static async login(req, res) {

        const {error} = loginValidator(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const user = await database.Usuario.findOne({where: {"email": req.body.email}});
        if(!user) return res.status(400).send("Email incorreto!");

        const validPassword = await bcrypt.compare(req.body.senha, user.senha);
        if(!validPassword) return res.status(400).send("Senha invÃ¡lida");

        const token = jwt.sign({ 
            id: user.id,
            exp: Math.floor(Date.now() / 1000) + (60 * 10) 
        }, process.env.TOKEN_SECRET);

        res.header("auth-token", token).send(token);
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