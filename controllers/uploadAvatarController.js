const cloudinary = require('cloudinary').v2;

const { User } = require('../models');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
});

const uploadAvatarController = {
    async uploadAvatar (req, res) {
        try {
            const file = req.body.avatar;
            const userId = req.body.id;
            const user = await User.findByPk(userId);
            const result = await cloudinary.uploader.upload(file, {
                folder: 'avatars',
                public_id: user.nickname,
                overwrite: true,
            });
            user.avatar = result.secure_url;
            await user.save();
            res.status(200).json({
                avatar: user.avatar
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json(`Désolé, une erreur s'est produite lors du téléchargement de ton avatar`);
        }
    },
};



module.exports = uploadAvatarController;
