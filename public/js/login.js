let dadosFetch = null;

window.addEventListener('load', () => {
    fetch("/usuarios", {
        method: "GET",
        cache: "default",
    })
        .then(res => {
            res.json()
                .then(data => {
                    dadosFetch = data;
                })
        });
})

function dadosLogin() {
    const email = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    verificarLogin(email, senha, dadosFetch);
}

function verificarLogin(email, senha, results) {
    let verificacao = false;

    console.log(email, senha, results);

    for (let result of results) {
        if (email == result.email && senha == result.senha) {
            verificacao = true;
        }
    }

    if (verificacao) {
        window.location.href = '/menu';
    } else {
        alert("Login inválido!")
    }
}