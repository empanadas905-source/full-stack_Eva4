const db = require('../config/db');

const ClinicaModel = {

    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM pacientes');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM pacientes WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const [result] = await db.execute(
            'INSERT INTO pacientes (nombre, rut, edad, prevision) VALUES (?, ?, ?, ?)',
            [nombre, rut, edad, prevision]
        );
        return result.insertId;
    },

    update: async (id, paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const [result] = await db.execute(
            'UPDATE pacientes SET nombre = ?, rut = ?, edad = ?, prevision = ? WHERE id = ?',
            [nombre, rut, edad, prevision, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.execute('SELECT * FROM pacientes WHERE id = ?', [id]);
        if (result.length === 0) return 0;
        
        await db.execute('DELETE FROM pacientes WHERE id = ?', [id]);
        return 1;
    }
};

module.exports = ClinicaModel;