import { profissionaisList, pacientesList, eventList } from '../../script/dataTest.js';
import { modalTypeList } from '../../script/clickTest.js'

/* ESCUTANDO O CLIQUE NOS INPUTS DA PÁGINA LEITURA - para abrir a lista certa no modal*/
const inputsLeitura = document.querySelectorAll(".inputsLeitura")

const inputsToOpenModal = (inputs) => {
    
    inputs.forEach((input)=>{
        input.addEventListener("click", ()=>{
            if(input.id === "professional"){
               modalTypeList(profissionaisList, input) 
            }else if(input.id === "patient"){
                modalTypeList(pacientesList, input)
            }else if(input.id === "event"){
                modalTypeList(eventList, input)
            }
        })
    })
}
inputsToOpenModal(inputsLeitura)