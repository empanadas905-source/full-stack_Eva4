const db = require('../config/db');

const ClinicaModel = {

    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM pacientes');
        return rows;
    },

    search: async (nombre = '', rut = '') => {
        let query = 'SELECT * FROM pacientes';
        const params = [];

        if (nombre) {
            query += ' WHERE LOWER(nombre) LIKE ?';
            params.push(`%${nombre.toLowerCase()}%`);
        }

        if (rut) {
            if (params.length) query += ' AND';
            else query += ' WHERE';
            query += ' rut LIKE ?';
            params.push(`%${rut}%`);
        }

        const [rows] = await db.execute(query, params);
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM pacientes WHERE id = ?', [id]);
        return rows[0];
    },

    existsByRut: async (rut, excludeId = null) => {
        let query = 'SELECT id FROM pacientes WHERE rut = ?';
        const params = [rut];
        if (excludeId) {
            query += ' AND id != ?';
            params.push(excludeId);
        }
        const [rows] = await db.execute(query, params);
        return rows.length > 0;
    },

    create: async (paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const duplicate = await ClinicaModel.existsByRut(rut);
        if (duplicate) {
            const error = new Error('El RUT ya está registrado');
            error.code = 'DUPLICATE_RUT';
            throw error;
        }

        const [result] = await db.execute(
            'INSERT INTO pacientes (nombre, rut, edad, prevision) VALUES (?, ?, ?, ?)',
            [nombre, rut, edad, prevision]
        );
        return result.insertId;
    },

    update: async (id, paciente) => {
        const { nombre, rut, edad, prevision } = paciente;
        const duplicate = await ClinicaModel.existsByRut(rut, id);
        if (duplicate) {
            const error = new Error('El RUT ya está registrado');
            error.code = 'DUPLICATE_RUT';
            throw error;
        }

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