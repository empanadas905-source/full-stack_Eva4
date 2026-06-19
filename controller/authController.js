const UserModel = require('../model/userModel');

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await UserModel.findByUsername(username);
            
            // Validación directa contra la base de datos
            if (user && user.password === password) {
                return res.json({ success: true, message: "Login correcto" });
            } else {
                return res.json({ success: false, message: "Credenciales incorrectas" });
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: "Error en el servidor" });
        }
    }
};

module.exports = authController;