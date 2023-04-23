const { User } = require('../models');

const userController = {

    async getUser (req, res) {
        try {
            const userId = parseInt(req.params.id);
            const user = await User.findByPk(userId);
            if (!user) {
                res.status(404).json(`Désolé, nous n'avons pas trouvé d'utilisateur avec cet identifiant`);
                return
            }
            res.status(200).json(user);
        }
        catch (error) {           
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération de l'utilisateur.`);
        }
    },


    async modifyAvatar (req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            user.avatar = req.body.avatar;
            await user.save();
            res.status(200).json(user.avatar);
        }
        catch (error) {
            console.error(error);            
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la modification de l'avatar.`);
        }
    },

    async deleteUser (req, res) {
        try {
            const user = await User.findByPk(req.params.userId);
            await user.destroy();
            // i want delete jwt token in cookie
            res.cookie("accessToken", "", { httpOnly: true, expires: new Date(0), secure: true, sameSite: 'none' });
            res.status(200).json(`Ton compte a bien été supprimé !`);
        }
        catch (error) {
            console.error(error);
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la suppression de ton compte. Merci de réessayer ultérieurement.`);
        }
    }
}


module.exports = userController;