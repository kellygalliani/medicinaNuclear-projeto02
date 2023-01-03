import { profissionaisList, pacientesList } from '../../script/dataTest.js';
import { modalTypeList } from '../../script/clickTest.js'

const inputsRelatório = document.querySelectorAll("input")

const inputsToOpenModal = (inputs) => {
    
    inputs.forEach((input)=>{
        input.addEventListener("click", ()=>{
            if(input.id === "professional"){
               modalTypeList(profissionaisList, input) 
            }else if(input.id === "patient"){
                modalTypeList(pacientesList, input)
            }
        })
    })
}
inputsToOpenModal(inputsRelatório)

/* MODAL SEARCH RELATÓRIO */
const buttonSearch = document.querySelector(".searchRelatorio")
const modalRelatorio = document.querySelector(".modalReports")
const closeModal = document.querySelector(".button_modal")
closeModal.addEventListener("click", (event)=> console.log(event.target)/* modalRelatorio.close() */)
const openModalRelatorio = ()=>{
    buttonSearch.addEventListener("click", ()=>{
        modalRelatorio.showModal()
    })
    
}
openModalRelatorio()