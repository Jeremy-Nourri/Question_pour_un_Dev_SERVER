const { User } = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const expiryDate = new Date(Date.now() + 60 * 60 * 1000)

const authController = {

    async signUp (req, res) {

        console.log(req.body);
        if (req.body.password !== req.body.passwordConfirm) {
            res.status(400).json("Les mots de passe ne sont pas identiques");
            return;
        }

        const userExist = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userExist) {
            res.status(400).json("Cet email est déjà utilisé");
            return;
        }

        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            if (err) {
                console.error(err);
                res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la création de ton compte. Merci de réessayer ultérieurement.`);
                return;
            }
            if (hashedPassword) {
                try {
                    const user = await User.create({
                        nickname: req.body.nickname,
                        email: req.body.email,
                        password: hashedPassword,
                    });
                    const token = jwt.sign(
                        {   
                            id: user.id,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1h"
                        }
                    );
                    
                    res.cookie("accessToken", token, {
                        httpOnly: true,                
                        secure: true,
                        sameSite: "none",
                        expires: expiryDate
                    });
                    res.status(200).json({
                        id: user.id,
                        nickname: user.nickname,
                    });

                } catch (error) {
                    console.error(error);
                    res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la création de ton compte. Merci de réessayer ultérieurement.`);
                }
            }
        });
    },

    async login (req, res) {
        if (!req.body.email || !req.body.password) {
            res.status(400).json("Veuillez renseigner un email et un mot de passe");
            return;
        }
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!user) {
                res.status(400).json("Identifiants incorrects");
                return;
            }
           
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);
            if (!passwordMatch) {
                res.status(400).json("Identifiants incorrects");
                return;
            }

            const token = jwt.sign(
                {   
                    id: user.id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1h"
                }
            );
            
            res.cookie("accessToken", token, {
                httpOnly: true,                
                secure: true,
                sameSite: "none",
                expires: expiryDate
            });

            res.status(200).json({ 
                id: user.id,
                nickname: user.nickname,
                avatar: user.avatar,
            }
            );

        } catch (error) {
            console.error(error);
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la connexion. Merci de réessayer ultérieurement.`);	
        }
    },

    logout (req, res) {
        req.user = null;
        res.cookie("accessToken", "", { httpOnly: true, expires: new Date(0), secure: true, sameSite: 'none' });
        res.status(200).json("Tu es déconnecté");
    }

}

module.exports = authController;