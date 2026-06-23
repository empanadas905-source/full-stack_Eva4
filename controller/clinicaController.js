const ClinicaModel = require('../model/clinicaModel');

const clinicaController = {
    listarPacientes: async (req, res) => {
        try {
            const nombre = req.query.nombre ? req.query.nombre.trim() : '';
            const rut = req.query.rut ? req.query.rut.trim() : '';
            const pacientes = await ClinicaModel.search(nombre, rut);
            res.json(pacientes);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener datos' });
        }
    },

    obtenerPaciente: async (req, res) => {
        try {
            const paciente = await ClinicaModel.getById(req.params.id);
            if (!paciente) return res.status(404).json({ error: 'Paciente no encontrado' });
            res.json(paciente);
        } catch (error) {
            res.status(500).json({ error: 'Error en el servidor' });
        }
    },

    crearPaciente: async (req, res) => {
        try {
            await ClinicaModel.create(req.body);
            res.json({ success: true, message: 'Paciente agregado correctamente' });
        } catch (error) {
            if (error.code === 'DUPLICATE_RUT') {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: 'Error al guardar el paciente' });
        }
    },

    actualizarPaciente: async (req, res) => {
        try {
            await ClinicaModel.update(req.params.id, req.body);
            res.json({ success: true, message: 'Paciente actualizado correctamente' });
        } catch (error) {
            if (error.code === 'DUPLICATE_RUT') {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ error: 'Error al actualizar' });
        }
    },

    eliminarPaciente: async (req, res) => {
        try {
            await ClinicaModel.delete(req.params.id);
            res.json({ success: true, message: 'Paciente eliminado' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar' });
        }
    }
};

module.exports = clinicaController;