const btn = document.getElementById("botao_submit");

console.log(btn)

btn.addEventListener("click", function () {
    const email = document.getElementById("inputEmail").value;
    const nome = document.getElementById("inputNome").value;
    const senha = document.getElementById("inputSenha").value;
    const nivel = 1;
    const id = null;

    console.log("Dados: ", email, nome, senha, nivel);

    console.log(JSON.stringify({ id: id, email: email, nome: nome, senha: senha, nivel: nivel }))

    fetch("/cadastrar",
        {
            method: "POST",
            body: JSON.stringify({ id: id, email: email, nome: nome, senha: senha, nivel: nivel }),
            headers: { "Content-Type": "application/json" }
        },
    )
        .then(res => {
        })
        
    alert("Cadastro feito com sucesso!")
    window.location.href = "/"
});