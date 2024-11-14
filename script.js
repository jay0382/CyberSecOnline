// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

// Função para abrir o modal
  function openModal() {
    document.getElementById("loginModal").style.display = "block";
    document.querySelector(".login-container").style.display = "none"; // Esconde o botão "Entrar"
  }

  // Função para fechar o modal
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.querySelector(".login-container").style.display = "flex"; // Mostra o botão "Entrar" novamente
  }

  // Fechar o modal ao clicar fora dele
  window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
      modal.style.display = "none";
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
          window.location.href = "/pagina-principal/pagina-principal.html"; //Substitua pelo link da página principal ou desejada
      } else {
          alert("Por favor, preencha o usuário e a senha.");
      }
  }
