let email = document.getElementById('email')
let senha = document.getElementById('senha')


function erro(){
    senha.style.border = 'solid 3px #ff2d00'
}

function erroEmail(){
    email.style.border = 'solid 3px #ff2d00'
}

function acerto(){
    senha.style.border = 'solid 3px #00b711'
}

function acertoEmail(){
    email.style.border = 'solid 3px #00b711'
}

document.getElementById('btn-login').addEventListener('click', function verificarSenha(){
if(senha.value.length < 8 ||
    !senha.value.match(/[a-z]/) ||
    !senha.value.match(/[A-Z]/) ||
    !senha.value.match(/[0-9]/) ||
    !senha.value.match(/[^a-zA-Z0-9]/)    
){
    erro()
} else {
    acerto()
 }
}
)

document.getElementById('btn-login').addEventListener('click', function verificarEmail(){
    if(email.value === 'yuriviana543@gmail.com'){
        acertoEmail()
    } else{
       erroEmail()
    }
})