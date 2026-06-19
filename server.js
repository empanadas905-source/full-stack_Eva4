const express = require('express');
const path = require('path');
const authController = require('./controller/authController');
const clinicaController = require('./controller/clinicaController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});

app.post('/api/login', authController.login);
app.get('/api/pacientes', clinicaController.listarPacientes);
app.get('/api/pacientes/:id', clinicaController.obtenerPaciente);
app.post('/api/pacientes', clinicaController.crearPaciente);
app.put('/api/pacientes/:id', clinicaController.actualizarPaciente);
app.delete('/api/pacientes/:id', clinicaController.eliminarPaciente);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});