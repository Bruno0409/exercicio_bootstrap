$(document).ready(function () {
    // Máscara para o telefone no formato BR (xx) xxxxx-xxxx
    $('#telefone').mask('(00) 00000-0000');
  
    // Validação simples ao enviar o formulário
    $('#cadastroForm').on('submit', function (e) {
      e.preventDefault(); // Evita o envio real
  
      const nome = $('#nome').val().trim();
      const email = $('#email').val().trim();
      const telefone = $('#telefone').val().trim();
  
      if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      alert('Cadastro enviado com sucesso!');
      this.reset();
    });
  });
  