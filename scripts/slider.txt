class Slider{
    constructor(id){
        this.slider = document.querySelector(`[data-slider="${id}"]`)
        this.ativo = 0;
        this.iniciar()
    }

    slideAtivo(index){
        this.ativo = index;
        this.items.forEach( item => item.classList.remove('ativo'))
        this.items[index].classList.add("ativo")
    }

    voltarSlide(){
        if(this.ativo > 0){
            this.slideAtivo(this.ativo - 1)
        } else{
            this.slideAtivo(this.items.length -1)
        }
    }

    proximoSlide(){
        if(this.ativo < this.items.length -1){
            this.slideAtivo(this.ativo + 1)
        }else{
            this.slideAtivo(0)
        }
        
    }

    navegacaoSlide(){
        const cadastroBtn = document.querySelector("[data-RegistroLogin]"),
            loginBtn = document.querySelector("[data-voltarLogin]")

        cadastroBtn.addEventListener("click", this.proximoSlide)
        loginBtn.addEventListener("click", this.voltarSlide)
    }

    iniciar(){
        this.voltarSlide = this.voltarSlide.bind(this)
        this.proximoSlide = this.proximoSlide.bind(this)
        this.items = this.slider.querySelectorAll('.slide-itens > *')
        this.navegacaoSlide()
        this.slideAtivo(0)
    }


}

new Slider("login")

class SliderThumb{
    constructor(id){
        this.slider = document.querySelector(`[data-slider="${id}"]`)
        this.ativo = 0
        this.iniciar()
    }

    slideAtivo(index){
        this.ativo = index;
        this.items.forEach( item => item.classList.remove('ativo'))
        this.items[index].classList.add("ativo")
        this.thumbItems.forEach( item => item.classList.remove('ativo'))
        this.thumbItems[index].classList.add("ativo")
        this.autoSlide()
    }

    voltarSlide(){
        if(this.ativo > 0){
            this.slideAtivo(this.ativo - 1)
        } else{
            this.slideAtivo(this.items.length -1)
        }
    }

    proximoSlide(){
        if(this.ativo < this.items.length -1){
            this.slideAtivo(this.ativo + 1)
        }else{
            this.slideAtivo(0)
        }
        
    }

    addNavegacaoManual(){
        this.items.forEach( () => (this.thumb.innerHTML += `<span></span>`))
        this.thumbItems = Array.from(this.thumb.children);
        this.thumbItems.forEach( (item, index) => {
            item.addEventListener("click", () => this.slideAtivo(index))
        })
    }

    navegacaoSlide(){
        const voltarBtn = document.querySelector(".slider .voltar__btn")
        const proximoBtn = document.querySelector(".slider .proximo__btn")
        voltarBtn.addEventListener("click", this.voltarSlide)
        proximoBtn.addEventListener("click", this.proximoSlide)
    }

    autoSlide(){
        clearTimeout(this.tempo)
        this.tempo = setTimeout(this.proximoSlide, 5000)
    }

    iniciar(){
        this.voltarSlide = this.voltarSlide.bind(this)
        this.proximoSlide = this.proximoSlide.bind(this)
        this.items = this.slider.querySelectorAll('.slide-itens > *')
        this.thumb = this.slider.querySelector(".slider__manual")
        this.addNavegacaoManual()
        this.slideAtivo(0)
        this.navegacaoSlide()
    }
}

new SliderThumb('slider')