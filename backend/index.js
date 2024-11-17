const express = require('express');
const bcrypt = require('bcrypt'); // Para criptografar senhas
const cors = require('cors');
const app = express();

// Usar a porta do ambiente ou 3000 como padrão
const port = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
    origin: '*', // Durante o desenvolvimento, permite todas as origens
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'] // Cabeçalhos permitidos
}));

// Simulando um banco de dados em memória
const users = [];

// Rota de registro
app.post('/api/register', async (req, res) => {
    console.log('Dados recebidos no registro:', req.body);

    const { email, username, password } = req.body;

    // Verificar se o email já está registrado
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        console.log('Erro: Email já registrado');
        return res.status(400).json({ message: 'Este email já está registrado. Tente outro.' });
    }

    // Criptografar a senha antes de armazenar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Armazenar o novo usuário no "banco de dados"
    const newUser = { email, username, password: hashedPassword };
    users.push(newUser);

    console.log('Novo usuário registrado:', newUser);

    // Responder com sucesso
    res.status(201).json({ message: 'Conta criada com sucesso!' });
});

// Rota de login
app.post('/api/login', async (req, res) => {
    console.log('Tentativa de login:', req.body);

    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = users.find(user => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log('Erro: Credenciais inválidas');
        return res.status(401).json({ message: 'Email ou senha incorretos.' });
    }

    console.log('Login realizado com sucesso para:', email);

    // Responder com sucesso
    res.status(200).json({ message: 'Login realizado com sucesso!' });
});

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
