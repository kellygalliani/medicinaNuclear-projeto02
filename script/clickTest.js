
/* MODAL GERAL DO TIPO LISTA */
const closeModal = document.querySelector(".button_modal")

export const modalTypeList = (list, input)=>{
    const modal = document.querySelector("dialog")
    const ulModal = document.querySelector(".contentModalList")
    ulModal.innerHTML = ""
    list.forEach((item)=>{
        const li = document.createElement("li")
        li.innerText = item
        li.addEventListener("click", ()=>{
            input.value = item
            inputsObserveValueForChangingCss()
            modal.close()
        })
        ulModal.append(li)
    }) 
    modal.append(ulModal, closeModal)
    modal.showModal()
    closeModal.addEventListener("click", ()=> modal.close())
}

/* MUDANDO A COR DOS INPUTS QUANDO UM ITEM FOR SELECIONADO NO MODAL  - função está sendo chamada no modal*/
const selectedInputs = document.querySelectorAll(".selectedInput")

export const inputsObserveValueForChangingCss = ()=>{
    selectedInputs.forEach((selectedInput)=>{
            if(selectedInput.value){
                selectedInput.style.cssText = "border-bottom: 2px solid var(--color-brand-3)";
                selectedInput.previousElementSibling.style.cssText = 
                "transform: translateY(-18px);"+
                "font-size: 13px;" + 
                "font-weight: 600;"+            
                "color: var(--color-brand-3);"
            }
    })
}
inputsObserveValueForChangingCss()