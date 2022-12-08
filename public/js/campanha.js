function campanha(n) {
    switch (n) {
        case 1:
            window.location.href = "/niveis"
            break;
        default:
            console.log("Deu erro!")
            break;
    }
}

function voltarMenu(){
    window.location.href = "/menu"
}