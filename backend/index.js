const express = require('express');
const bcrypt = require('bcrypt'); // Para criptografar senhas
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({ origin: 'http://localhost:3000' })); // Ajuste a origem para o domínio do seu frontend

// Simulando um banco de dados em memória
const users = [];

// Rota de registro
app.post('/api/register', async (req, res) => {
    console.log('Dados recebidos no registro:', req.body);

    const { email, username, password } = req.body;

    // Verificar se o email já está registrado
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email já registrado.' });
    }

    // Criptografar a senha antes de armazenar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Armazenar o novo usuário no "banco de dados"
    const newUser = { email, username, password: hashedPassword };
    users.push(newUser);

    // Responder com sucesso
    res.status(201).json({ message: 'Conta criada com sucesso!' });
});

// Rota de login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = users.find(user => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    // Responder com sucesso
    res.status(200).json({ message: 'Login realizado com sucesso!' });
});

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
