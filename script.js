function closeDevelopmentBanner() {
    document.getElementById('developmentBanner').style.display = 'none';
}

// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// Função para abrir o modal de login
function openLoginModal() {
    document.getElementById("login-modal").classList.add("visible");
}

// Função para fechar o modal de login
function closeLoginModal() {
    document.getElementById("login-modal").classList.remove("visible");
}

// Função para abrir o modal de criação de conta
function openRegisterModal() {
    document.getElementById("register-modal").classList.add("visible");
}

// Função para fechar o modal de criação de conta
function closeRegisterModal() {
    document.getElementById("register-modal").classList.remove("visible");
}

// Função para alternar a visualização de senha
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

// Validação de e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validação de senha
function validatePassword(password) {
    const passwordRegex = /^(?=.[!@#$%^&])(?=.{6,})/;
    return passwordRegex.test(password);
}

// Validação do formulário de login
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!validateEmail(email)) {
        document.getElementById("login-email-error").innerText = "Por favor, insira um e-mail válido.";
    } else {
        document.getElementById("login-email-error").innerText = "";
    }

    if (!validatePassword(password)) {
        document.getElementById("login-password-error").innerText = "A senha deve ter pelo menos 6 caracteres e incluir caracteres especiais.";
    } else {
        document.getElementById("login-password-error").innerText = "";
    }

    if (validateEmail(email) && validatePassword(password)) {
        alert("Login bem-sucedido!");
        closeLoginModal();
    }
});

// Validação do formulário de criação de conta
document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!validateEmail(email)) {
        document.getElementById("register-email-error").innerText = "Por favor, insira um e-mail válido.";
    } else {
        document.getElementById("register-email-error").innerText = "";
    }

    if (!username) {
        document.getElementById("register-username-error").innerText = "Por favor, insira um nome de usuário.";
    } else {
        document.getElementById("register-username-error").innerText = "";
    }

    if (!validatePassword(password)) {
        document.getElementById("register-password-error").innerText = "A senha deve ter pelo menos 6 caracteres e incluir caracteres especiais.";
    } else {
        document.getElementById("register-password-error").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerText = "As senhas não coincidem.";
    } else {
        document.getElementById("confirm-password-error").innerText = "";
    }

    if (validateEmail(email) && username && validatePassword(password) && password === confirmPassword) {
        alert("Conta criada com sucesso!");
        closeRegisterModal();
    }
});

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

// Função para alternar visualização de senha
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

// Validação de e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validação de senha
function validatePassword(password) {
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{6,})/;
    return passwordRegex.test(password);
}

// Validação do formulário de login
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!validateEmail(email)) {
        document.getElementById("login-email-error").innerText = "Por favor, insira um e-mail válido.";
    } else {
        document.getElementById("login-email-error").innerText = "";
    }

    if (!validatePassword(password)) {
        document.getElementById("login-password-error").innerText = "A senha deve ter pelo menos 6 caracteres e incluir caracteres especiais.";
    } else {
        document.getElementById("login-password-error").innerText = "";
    }

    if (validateEmail(email) && validatePassword(password)) {
        alert("Login bem-sucedido!");
    }
});

// Validação do formulário de criação de conta
document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!validateEmail(email)) {
        document.getElementById("register-email-error").innerText = "Por favor, insira um e-mail válido.";
    } else {
        document.getElementById("register-email-error").innerText = "";
    }

    if (!username) {
        document.getElementById("register-username-error").innerText = "Por favor, insira um nome de usuário.";
    } else {
        document.getElementById("register-username-error").innerText = "";
    }

    if (!validatePassword(password)) {
        document.getElementById("register-password-error").innerText = "A senha deve ter pelo menos 6 caracteres e incluir caracteres especiais.";
    } else {
        document.getElementById("register-password-error").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerText = "As senhas não coincidem.";
    } else {
        document.getElementById("confirm-password-error").innerText = "";
    }

    if (validateEmail(email) && username && validatePassword(password) && password === confirmPassword) {
        alert("Conta criada com sucesso!");
    }
});

// Exibir janela de cookies após 5 segundos
setTimeout(() => {
  const cookieConsent = document.getElementById('cookieConsent');
  const hasConsent = localStorage.getItem('cookieConsent');

  if (!hasConsent) {
    cookieConsent.classList.remove('hidden');
  }
}, 5000);

// Gerenciar ações dos botões
document.getElementById('acceptCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookieConsent();
});

document.getElementById('rejectCookies').addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'rejected');
  hideCookieConsent();
});

// Função para ocultar a janela
function hideCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  cookieConsent.classList.add('hidden');
}

// Abrir o modal de Definições de Cookies
function openCookieSettingsModal() {
  const modal = document.getElementById('cookieSettingsModal');
  modal.style.display = 'block';
}

// Fechar o modal de Definições de Cookies
function closeCookieSettingsModal() {
  const modal = document.getElementById('cookieSettingsModal');
  modal.style.display = 'none';
}

// Salvar configurações de cookies
function saveCookieSettings() {
  const preferenceCookies = document.getElementById('preferenceCookies').checked;
  const statisticsCookies = document.getElementById('statisticsCookies').checked;
  const marketingCookies = document.getElementById('marketingCookies').checked;

  // Salvar configurações no localStorage
  const cookieSettings = {
    preference: preferenceCookies,
    statistics: statisticsCookies,
    marketing: marketingCookies,
  };

  localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));

  alert('Suas preferências de cookies foram salvas!');
  closeCookieSettingsModal();
}

// Verificar configurações de cookies ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
  if (savedSettings) {
    document.getElementById('preferenceCookies').checked = savedSettings.preference;
    document.getElementById('statisticsCookies').checked = savedSettings.statistics;
    document.getElementById('marketingCookies').checked = savedSettings.marketing;
  }
});

// Ajustar posição caso a janela de definições de cookies seja aberta
function adjustCookiePosition() {
  const cookieConsent = document.getElementById('cookieConsent');
  cookieConsent.style.bottom = '200px'; // Altere para a altura adequada
}

document.getElementById('openCookieSettings').addEventListener('click', () => {
  adjustCookiePosition();
});


