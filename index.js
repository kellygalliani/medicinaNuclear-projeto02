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
        if(button.innerText === "Relatório de dose"){
            window.location.replace("./pages/Relatório/relatorio.html")
        }
    })
})