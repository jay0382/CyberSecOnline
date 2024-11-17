// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// Função para abrir e fechar modais de login
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none"; // Esconde o botão "Entrar"
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex"; // Mostra o botão "Entrar" novamente
}

// Função para abrir e fechar modais de criação de conta
function openRegisterModal() {
    document.getElementById("registerModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none";
}

function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
}

// Funções para abrir e fechar Política de Privacidade
function openPrivacyModal() {
    document.getElementById("privacyModal").style.display = "block";
}

function closePrivacyModal() {
    document.getElementById("privacyModal").style.display = "none";
}

// Funções para abrir e fechar Termos de Serviço
function openTermsModal() {
    document.getElementById("termsModal").style.display = "block";
}

function closeTermsModal() {
    document.getElementById("termsModal").style.display = "none";
}


// Função para validar senha
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+=/_<>!@#$])[A-Za-z\d+=/_<>!@#$]{5,}$/;
    return regex.test(password);
}

// Função para tratar o envio do formulário de login
function handleLoginSubmit(event) {
    event.preventDefault();
    const emailOrUsername = document.getElementById('login-email-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    // Simulação de verificação de usuários registrados
    const registeredUsers = [
        { email: 'usuario1@gmail.com', username: 'usuario1', password: 'Senha@123' },
        { email: 'usuario2@yahoo.com', username: 'usuario2', password: 'Senha@456' }
    ];

    const user = registeredUsers.find(
        user => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password
    );

    if (!user) {
        loginError.textContent = 'Credenciais inválidas. Verifique o email, usuário ou senha.';
        return;
    }

    loginError.textContent = '';
    alert('Login bem-sucedido!');

    // Redirecionar para a página principal
window.location.href = '/pagina-principal/index.html';

    // Limpar os campos após login bem-sucedido
    document.getElementById('login-email-username').value = '';
    document.getElementById('login-password').value = '';
}

// Função para tratar o envio do formulário de registro
function handleSignupSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const signupError = document.getElementById('signup-error');

    if (!validateEmail(email)) {
        signupError.textContent = 'Por favor, insira um email válido.';
        return;
    }

    if (!validatePassword(password)) {
        signupError.textContent =
            'A senha deve ter pelo menos 6 caracteres e incluir números, letras maiúsculas, letras minúsculas e caracteres especiais: +, =, /, _, <, >, !, @, #, $.';
        return;
    }

    if (password !== confirmPassword) {
        signupError.textContent = 'As senhas não coincidem.';
        return;
    }

    // Simulação de Criação de Conta
    const registeredUsers = ['usuario1@gmail.com', 'usuario2@yahoo.com'];
    if (registeredUsers.includes(email)) {
        signupError.textContent = 'Usuário já cadastrado.';
        return;
    }

    signupError.textContent = '';
    alert('Conta criada com sucesso!');

    // Limpar campos após criação de conta
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-confirm-password').value = '';
}

// Fechar qualquer modal ao clicar fora dele
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const privacyModal = document.getElementById("privacyModal");
    const termsModal = document.getElementById("termsModal");

    if (event.target === loginModal) closeLoginModal();
    if (event.target === registerModal) closeRegisterModal();
    if (event.target === privacyModal) closePrivacyModal();
    if (event.target === termsModal) closeTermsModal();
};

//Exibir janela de cookies após 5 segundos
setTimeout(() => {
  const cookieConsent = document.getElementById('cookieConcent');
  const hasConsent = localStorage.getItem('cookieConsent');

  if (!hasConsent) {
    cookieConcent.classList.remove('hidden');
  }
}, 5000);

//Gerenciar ações dos botões
document.getElementById('acceptCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConcent', 'accepted');
  hideCookieConsent();
});

document.getElementById('rejectCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConcent', 'rejected');
  hideCookieConcent();
});

//Função para ocultar a janela
function hideCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  cookieConsent.classList.add('hidden');
}
