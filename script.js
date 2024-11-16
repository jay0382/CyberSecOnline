// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// Função para abrir o modal de login
  function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none"; // Esconde o botão "Entrar"
  }

  // Função para fechar o modal de login
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex"; // Mostra o botão "Entrar" novamente
  }

// Função para abrir o modal de criação de conta
function openRegisterModal() {
    document.getElementById("registerModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none";
  }

// Função para fechar o modal de criação de conta
function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex";
  }

  // Fechar o modal ao clicar fora dele
  window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    if (event.target === loginModal) {
        closeLoginModal();

    } else if (event.target === registerModal) {
        closeRegisterModal();
  };

// Validação do formulário de registro
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
    }
    // Validação do padrão de senha (opcional, pois o HTML já faz isso)

    const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/;
    if (!passwordPattern.test(password)) {
        alert("A senha não atende aos requisitos de segurança.");
        return;
    }

    // Enviar os dados ao backend
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

// Validação do formulário de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Enviar os dados ao backend
    const data = { email, password };

    fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("Login realizado com sucesso!");
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        });
}); 

// Função para  abrir o modal de Política de Privacidade
function openPrivacyModal() {
    document.getElementById("privacyModal").style.display = "block";
}

// Função para fechar o modal de Política de Privacidade
function closePrivacyModal() {
     document.getElementById("privacyModal").style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const privacyModal = document.getElementById("privacyModal");
    if (event.target === privacyModal) {
        privacyModal.style.display = "none";
    }
};

// Função para abrir o modal de Termos de Serviço
function openTermsModal() {
    document.getElementById("termsModal").style.display = "block";
}

// Função para fechar o modal de Termos de Serviço
function closeTermsModal() {
    document.getElementById("termsModal").style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const termsModal = document.getElementById("termsModal");
    if (event.target === termsModal) {
        termsModal.style.dispaly = "none";
    }
}; 
