const user = {
    nome: "Iury",
    email: "n@n.com",
    nascimento: "2000/10/17",
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}


const divLogin = document.querySelector("[data-divLogin]"),
    dialogLogin = document.querySelector("[data-login]"),
    formulario = document.querySelector("[data-formLogin]"),
    closeFormulario = document.querySelectorAll("[data-closeForm]"),
    cadastroDados = document.querySelectorAll("[data-formDadosRegistro]")

function registro(){
    if(cadastroDados[0] && cadastroDados[1] && cadastroDados[2] && cadastroDados[3] && cadastroDados[4] && cadastroDados[5] && cadastroDados[6]){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                emailUser: cadastroDados[0].value,
                cpfUser: cadastroDados[1].value,
                nomeUser: cadastroDados[2].value,
                sobrenomeUser: cadastroDados[3].value,
                dataNascimentoUser: cadastroDados[4].value,
                senhaUser: cadastroDados[5].value,
                telefoneUser: cadastroDados[6].value,
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        console.log(listaUser)
    }

    cadastroDados.forEach( item => {
        item.value = ""
    })
}


divLogin.addEventListener("click", () => {
    dialogLogin.showModal()
})

closeFormulario.forEach( item => {
    item.addEventListener("click", () => {
        dialogLogin.close()
    })
})