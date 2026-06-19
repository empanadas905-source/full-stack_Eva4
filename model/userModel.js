const db = require('../config/db');

const UserModel = {
    // Busca un usuario por su username
    findByUsername: async (username) => {
        const [rows] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
        return rows[0];
    }
};

module.exports = UserModel;