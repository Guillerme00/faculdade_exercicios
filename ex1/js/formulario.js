const form = document.querySelector("#formCadastro");

if (form) {
  const campos = [
    {
      id: "nome",
      erro: "erroNome",
      mensagem: "Erro no nome: preencha este campo.",
    },
    {
      id: "email",
      erro: "erroEmail",
      mensagem: "Erro no e-mail: digite um e-mail válido.",
    },
    {
      id: "telefone",
      erro: "erroTelefone",
      mensagem: "Erro no telefone: preencha este campo.",
    },
    {
      id: "assunto",
      erro: "erroAssunto",
      mensagem: "Erro no assunto: preencha este campo.",
    },
    {
      id: "mensagem",
      erro: "erroMensagem",
      mensagem: "Erro na mensagem: preencha este campo.",
    },
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formularioValido = true;
    document.querySelector("#mensagemSucesso").textContent = "";

    campos.forEach((campo) => {
      const entrada = document.querySelector(`#${campo.id}`);
      const aviso = document.querySelector(`#${campo.erro}`);
      const campoVazio = entrada.value.trim() === "";
      const emailInvalido =
        campo.id === "email" && !entrada.value.includes("@");

      aviso.textContent = "";

      if (campoVazio || emailInvalido) {
        aviso.textContent = campo.mensagem;
        formularioValido = false;
      }
    });

    if (formularioValido) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });
}
