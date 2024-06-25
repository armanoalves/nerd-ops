const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const database = require("../models");

const {registerValidator, loginValidator} = require('../../validation');

router.post('/register', async (req, res)=>{

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
})


router.post('/login', async (req, res)=>{

    const {error} = loginValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await database.Usuario.findOne({where: {"email": req.body.email}});
    if(!user) return res.status(400).send("Email incorreto!");

    const validPassword = await bcrypt.compare(req.body.senha, user.senha);
    if(!validPassword) return res.status(400).send("Senha inválida");

    const token = jwt.sign({ 
        id: user.id,
        exp: Math.floor(Date.now() / 1000) + (60 * 10) 
    }, process.env.TOKEN_SECRET);

    res.header("auth-token", token).send(token);
})


module.exports = router;