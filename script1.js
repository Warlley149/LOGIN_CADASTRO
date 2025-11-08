document.getElementById('nome').addEventListener('keypress', function(event) {

  if (!isNaN(event.key) && event.key !== ' ') {
    event.preventDefault();
    alert('❌ O campo Nome aceita apenas letras!');
  }
});

document.getElementById('CPF').addEventListener('keypress', function(event) {

  const permitidos = "0123456789";

  if (!permitidos.includes(event.key)) {
    event.preventDefault();
    alert('❌ Digite apenas números no CPF!');
  }
});

document.getElementById('telefone').addEventListener('keypress', function(event) {

  const permitidos = "0123456789";

  if (!permitidos.includes(event.key)) {
    event.preventDefault();
    alert('❌ Digite apenas números no Telefone!');
  }
});

document.querySelector('input[type="submit"]').addEventListener('click', function(event) {

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('CPF').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  if (nome === "" || cpf === "" || telefone === "") {
    event.preventDefault();
    alert("⚠️ Preencha todos os campos antes de cadastrar!");
  } else if (cpf.length !== 11) {
    event.preventDefault();
    alert("⚠️ O CPF deve conter exatamente 11 números!");
  } else if (telefone.length < 10 || telefone.length > 11) {
    event.preventDefault();
    alert("⚠️ O telefone deve ter 10 ou 11 números!");
  } else {
    alert("✅ Cadastro realizado com sucesso!");
  }
});
