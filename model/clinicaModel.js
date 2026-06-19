const db = require('../config/db');

const ClinicaModel = {

    // selecciona a todos los pacientes
    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM pacientes');
        return rows;
    },

    // selecciona a un paciente por ID
    getById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM pacientes WHERE id = ?', [id]);
        return rows[0];
    },

    // Crear un nuevo paciente
    create: async (paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const [result] = await db.execute(
            'INSERT INTO pacientes (nombre, rut, edad, prevision) VALUES (?, ?, ?, ?)',
            [nombre, rut, edad, prevision]
        );
        return result.insertId;
    },

    // Actualizar un paciente existente
    update: async (id, paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const [result] = await db.execute(
            'UPDATE pacientes SET nombre = ?, rut = ?, edad = ?, prevision = ? WHERE id = ?',
            [nombre, rut, edad, prevision, id]
        );
        return result.affectedRows;
    },

    // Eliminar un paciente
    delete: async (id) => {
        const [result] = await db.execute('SELECT * FROM pacientes WHERE id = ?', [id]);
        if (result.length === 0) return 0;
        
        await db.execute('DELETE FROM pacientes WHERE id = ?', [id]);
        return 1;
    }
};

module.exports = ClinicaModel;