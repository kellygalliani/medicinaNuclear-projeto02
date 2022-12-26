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
    })
})
