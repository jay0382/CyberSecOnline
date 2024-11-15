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
    }
  };

  function redirectToHome(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      // Aqui você pode adicionar uma validação dos campos, se necessário
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Verificação de exemplo (opcional)
      if (username && password) {

          // Redireciona para a página desejada
          window.location.href = "pagina-principal/index.html"; //Substitua pelo link da página principal ou desejada
      } else {
          alert("Por favor, preencha o usuário e a senha.");
      }
  }

// Função para abrir o modal de Política de Privacidade
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


