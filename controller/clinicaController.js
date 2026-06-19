const ClinicaModel = require('../model/clinicaModel');

const clinicaController = {
    listarPacientes: async (req, res) => {
        try {
            const pacientes = await ClinicaModel.getAll();
            res.json(pacientes);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener datos" });
        }
    },

    obtenerPaciente: async (req, res) => {
        try {
            const paciente = await ClinicaModel.getById(req.params.id);
            if (!paciente) return res.status(404).json({ error: "Paciente no encontrado" });
            res.json(paciente);
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    },

    crearPaciente: async (req, res) => {
        try {
            await ClinicaModel.create(req.body);
            res.json({ success: true, message: "Paciente agregado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al guardar el paciente" });
        }
    },

    actualizarPaciente: async (req, res) => {
        try {
            await ClinicaModel.update(req.params.id, req.body);
            res.json({ success: true, message: "Paciente actualizado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar" });
        }
    },

    eliminarPaciente: async (req, res) => {
        try {
            await ClinicaModel.delete(req.params.id);
            res.json({ success: true, message: "Paciente eliminado" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar" });
        }
    }
};

module.exports = clinicaController;