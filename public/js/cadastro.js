const btn = document.getElementById("botao_submit");

btn.addEventListener("click", function () {
    const email = document.getElementById("inputEmail").value;
    const nome = document.getElementById("inputNome").value;
    const senha = document.getElementById("inputSenha").value;
    const nivel = 1;

    console.log("Dados: ", email, nome, senha, nivel);

    fetch("/cadastrar",
        {
            method: "POST",
            body: JSON.stringify({ email, nome, senha, nivel }),
            headers: { "Content-Type": "application/json" }
        },
    )
        .then(res => {
        })

    alert("Cadastro feito com sucesso!")
    window.location.href = "/"
});