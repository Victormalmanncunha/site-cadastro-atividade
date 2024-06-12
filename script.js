let usuarios = []
let senhas = []

function cadastrar(){
    let nomeDigitado = document.getElementById('usernameCadastro').value
    let senhaDigitada = document.getElementById('senhaCadastro').value
    if(nomeDigitado!=='' && senhaDigitada!==''){
        if(usuarios.includes(nomeDigitado)) return alert("Já existe um usuário com esse nome.")
        usuarios.push(nomeDigitado)
        senhas.push(senhaDigitada)
    }else{
        alert('Algo foi preenchido incorretamente.')
    }
}

function logar(){
    let nomeDigitado = document.getElementById('usernameLogin').value
    let senhaDigitada = document.getElementById('senhaLogin').value
    if(usuarios.includes(nomeDigitado)){
        if(senhas[usuarios.indexOf(nomeDigitado)] === senhaDigitada){
            window.location.href="logado.html"
        }else{
            alert("Senha incorreta.")
        }
    }else{
        alert("Usuário não encontrado.")
    }
}