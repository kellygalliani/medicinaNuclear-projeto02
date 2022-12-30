const buttonsHome = document.querySelectorAll("button")

const arrayButtons = [...buttonsHome]
arrayButtons.forEach((button)=>{
    /* console.log(button.innerText) */
    button.addEventListener("click", ()=>{
        
        if(button.innerText === "Profissionais"){
            window.location.replace("./pages/Profissionais/profissionais.html")
            console.log(button.innerText)
        }
        if(button.innerText === "Pacientes"){
            window.location.replace("./pages/Pacientes/pacientes.html")
        }
        if(button.innerText === "Leitura"){
            window.location.replace("./pages/Leitura/leitura.html")
        }
    })
})

const inputProfissional = document.querySelector(".inputName")
const modal = document.querySelector("dialog")
const closeModal = document.querySelector(".button_modal")

inputProfissional.addEventListener("click", ()=> modal.showModal())
closeModal.addEventListener("click", ()=> modal.close())

/* DOM MODAL */

