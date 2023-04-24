let btnCadastro = document.querySelector("#cadastro__produto")
let btnDialogCreate = document.querySelector(".cadastro__item")
let btnCadastroDialog = document.querySelector("#cadastro__btn")
let btnDialogCreateItems = document.querySelectorAll(".cadastro__item > *")

let produtosItems = document.querySelectorAll(".cards__itens")

function criarProduto(arquivo){
    console.log(arquivo)
    let reader = new FileReader();
    
    let dadoIMG = ""
    reader.onloadend = function() {
        console.log(reader.result)
        dadoIMG = reader.result
    }

    console.log(reader.readAsDataURL(arquivo))
    
    let HTML = ""

    HTML = `
    <div class="card__item__pequeno">
        <div class="card__img__pequeno">
            <img src="${dadoIMG}" alt="Foto de um produto">
            <i class="fa-regular fa-heart"></i>
            <span>20% OFF</span>
        </div>
        <div class="card__infor__pequeno">
            <span>Nero</span>
            <span>Preço: 89.99R$</span>
            <Button>Comprar</Button>
        </div>
    </div>
    `

    produtosItems[0].innerHTML += HTML

}

btnCadastro.addEventListener("click", () => {
    btnDialogCreate.showModal()
})

btnCadastroDialog.addEventListener("click", () => {
    criarProduto(btnDialogCreateItems[0].files[0])
    // btnDialogCreate.close()
})
