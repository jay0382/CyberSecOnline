// * Funções Gerais *
function closeDevelopmentBanner() {
    document.getElementById('developmentBanner').style.display = 'none';
}

// * Menu *
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// * Modais de Login e Criação de Conta *
function openLoginModal() {
    document.getElementById("login-modal").classList.add("visible");
}

function closeLoginModal() {
    document.getElementById("login-modal").classList.remove("visible");
}

function openRegisterModal() {
    document.getElementById("register-modal").classList.add("visible");
}

function closeRegisterModal() {
    document.getElementById("register-modal").classList.remove("visible");
}

// * Visualização de Senha *
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === "password" ? "text" : "password";
}

// * Validações *
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.[!@#$%^&])(?=.{6,})/;
    return passwordRegex.test(password);
}

// * Validação de Formulários *
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

// * Cookies *
setTimeout(() => {
    const cookieConsent = document.getElementById('cookieConsent');
    const hasConsent = localStorage.getItem('cookieConsent');

    if (!hasConsent) {
        cookieConsent.classList.remove('hidden');
    }
}, 5000);

document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieConsent();
});

document.getElementById('rejectCookies').addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieConsent();
});

function hideCookieConsent() {
    document.getElementById('cookieConsent').classList.add('hidden');
}

function openCookieSettingsModal() {
    document.getElementById('cookieSettingsModal').style.display = 'block';
}

function closeCookieSettingsModal() {
    document.getElementById('cookieSettingsModal').style.display = 'none';
}

function saveCookieSettings() {
    const preferenceCookies = document.getElementById('preferenceCookies').checked;
    const statisticsCookies = document.getElementById('statisticsCookies').checked;
    const marketingCookies = document.getElementById('marketingCookies').checked;

    const cookieSettings = {
        preference: preferenceCookies,
        statistics: statisticsCookies,
        marketing: marketingCookies,
    };

    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    alert('Suas preferências de cookies foram salvas!');
    closeCookieSettingsModal();
}

// * Verificar Configurações de Cookies ao Carregar a Página *
document.addEventListener('DOMContentLoaded', () => {
    const savedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
    if (savedSettings) {
        document.getElementById('preferenceCookies').checked = savedSettings.preference;
        document.getElementById('statisticsCookies').checked = savedSettings.statistics;
        document.getElementById('marketingCookies').checked = savedSettings.marketing;
    }
});



