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
    let usuario = null;

    console.log(email, senha, results);

    for (let result of results) {
        if (email == result.email && senha == result.senha) {
            verificacao = true;
            usuario = result;
        }
    }

    if (verificacao) {
        window.location.href = '/menu';
        localStorage.setItem("usuario", usuario)
    } else {
        alert("Login inválido!")
    }
}