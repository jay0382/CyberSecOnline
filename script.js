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

// Validação do formulário de registro
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
    }

    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/;
    if (!passwordPattern.test(password)) {
        alert("A senha não atende aos requisitos de segurança.");
        return;
    }

    const data = { email, username, password };

    fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("Conta criada com sucesso!");
                closeRegisterModal();
            } else {
                alert("Erro ao criar conta. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro", error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        });
});

// Validação do formulário de login com redirecionamento
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = { email, password };

    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("Login realizado com sucesso!");
                //Redirecionar para a página principal
                window.location.href = "pagina-principal/index.html"; 
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        });
});

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
