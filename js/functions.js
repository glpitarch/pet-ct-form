/*----------///_INPUTS CLEANER_///----------*/
const cleaner = () => {
    for (const input of allInputs) {
        let arrayElement = document.getElementById(input)
        if (arrayElement.classList.contains("hide")) {         
        } 
        else if (arrayElement.classList.contains("required-borders")) {         
            arrayElement.classList.remove("required-borders");
            arrayElement.classList.add("borderless");
        }   
    }
    document.getElementById("navigatorBar").classList.add("hide");
    document.getElementById("studies").classList.remove("required-borders");
    document.getElementById("studies").classList.add("borderless");
    document.getElementById("hospitalizedValues").classList.remove("required-borders")
    document.getElementById("hospitalizedValues").classList.add("borderless");
}       
/*----------///_PRINT FORM_///----------*/
const print = () => {
    saveValuesToLocalStorage()
    cleaner()
    isHospitalized()
    calculateMassIndex()
    calculateOptimalActivity()
    window.print()
}
/*----------///_MASS INDEX_///----------*/
const calculateMassIndex = () => {
    let medicForm = localStorage.getItem("onMedicForm")
    let weight = document.getElementById("input-9").value
    let height = document.getElementById("input-10").value
    let yearsOld = document.getElementById("input-11").value
    let select = document.getElementById("studies");
    let selectValue = select.options[select.selectedIndex].value;
    let result = weight/(height*height)
 
    if ( medicForm == "true" && result <= 25 && yearsOld <= 50 && selectValue === "study-1") {
        return document.getElementById("massIndexDom").innerHTML = "IMC: " + Math.round((result + Number.EPSILON) * 100) / 100
    } 
    else if (medicForm == "false" && result <= 25 && yearsOld <= 50 && selectValue === "study-1") {
        document.getElementById("betaBlocker").classList.remove("hiden")
        document.getElementById("betaBlocker").classList.add("h-flex-div")
        return document.getElementById("massIndexDom").innerHTML = "IMC: " + Math.round((result + Number.EPSILON) * 100) / 100    
    }  
    else if (weight == "" || height == "") {
        return document.getElementById("massIndexDom").innerHTML = "IMC: "
    }
    else if (result >= 25) {
        return document.getElementById("massIndexDom").innerHTML = "IMC: " + Math.round((result + Number.EPSILON) * 100) / 100
    } else {
        return document.getElementById("massIndexDom").innerHTML = "IMC: " + Math.round((result + Number.EPSILON) * 100) / 100
    }
}
/*----------///_OPTIMAL ACTIVITY_///----------*/
const calculateOptimalActivity = () => {
    let select = document.getElementById("studies");
    let selectValue = select.options[select.selectedIndex].value;
    let yearsOld = document.getElementById("input-11").value
    let weight = document.getElementById("input-9").value
    if (selectValue === "study-2-1") {
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: " + 6 + " mCi"
    }
    else if (selectValue === "study-3-2") {
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: entre 1.5 y 2 mCi"
    }
    else if (selectValue === "study-4") {
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: " + 3 + " mCi"
    }
    else if (weight == "" || yearsOld == "") {
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: "
    }
    else if (selectValue === "study-1" && yearsOld < 18) {
        let calculation1 = weight*0.0640
        let calculation2 = weight*0.09
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: entre " + Math.round((calculation1 + Number.EPSILON) * 100) / 100 + " y " + Math.round((calculation2 + Number.EPSILON) * 100) / 100 + " mCi"
    }
    else if (selectValue === "study-1") {
        let factor = 0.09
        let calculation = weight*factor
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: " + Math.round((calculation + Number.EPSILON) * 100) / 100 + " mCi"
    } 
    else if (selectValue === "study-2-2" || selectValue === "study-3-1" || selectValue === "study-5") {
        let factor = 0.07
        let calculation = weight*factor
        return document.getElementById("optimalActivityDom").innerHTML = "Actividad óptima: " + Math.round((calculation + Number.EPSILON) * 100) / 100 + " mCi"
    }
}
/*----------///_HOSPITALIZED INFORMATION_///----------*/
const isHospitalized = () => {
    let optionValue = document.getElementById("hospitalizedValues").value
    if (optionValue === "SI") {
        document.getElementById("hospitalizedInfo").classList.remove("hide")
        document.getElementById("hospitalizedInfo").classList.add("v-flex-div")
    }
    else {
        document.getElementById("hospitalizedInfo").classList.remove("v-flex-div")
        document.getElementById("hospitalizedInfo").classList.add("hide")
    }
}
/*----------///_SAVE VALUES TO LOCAL STORAGE_///----------*/
const saveValuesToLocalStorage = () => {
    for(const input of allInputs) {
        let inputValue = document.getElementById(input).value
        localStorage.setItem(input, inputValue);
    }
}
/*----------///_REMOVE KEYS TO LOCAL STORAGE_///----------*/
const removeKeysToLocalStorage = () => {
    for(const input of allInputs) {
        localStorage.removeItem(input)
    }
}
/*----------///_TECHNOLOGIST FORM TO MEDIC FORM_///----------*/
const technologistFormToMedicForm = () => {
    localStorage.setItem("onMedicForm", "true");
}
/*----------///MEDIC FORM TO _TECHNOLOGIST FORM_///----------*/
const medicFormToTechnologistForm = () => {
    localStorage.setItem("onMedicForm", "false");
}
/*----------///_UPDATED TYPED INPUTS RENDERER_///----------*/
/* ----------_To Render XSmallInput_---------- */
const toRenderXSmallInput = (input, actualInputValue) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="${actualInputValue}" class="required-borders xs-input">`
}
/*----------_To Render SmallInput_----------*/
const toRenderSmallInput = (input, actualInputValue) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="${actualInputValue}" class="required-borders small-input">`
}
/*----------_To Render MediumInput_----------*/
const toRenderMediumInput = (input, actualInputValue) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="${actualInputValue}" class="required-borders medium-input">`
}
/*----------_To Render LargeInput_----------*/
const toRenderLargeInput = (input, actualInputValue) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="${actualInputValue}" class="required-borders large-input">`
}
/*----------_To Render XLargeInput_----------*/
const toRenderXLargeInput = (input, actualInputValue) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="${actualInputValue}" class="required-borders xl-input">`
}
/*----------///_EMPTY TYPED INPUTS RENDERER_///----------*/
/* ----------_To Render Empty XSmallInput_---------- */
const toRenderEmptyXSmallInput = (input) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="" class="required-borders xs-input">`
}
/*----------_To Render Empty SmallInput_----------*/
const toRenderEmptySmallInput = (input) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="" class="required-borders small-input">`
}
/*----------_To Render Empty MediumInput_----------*/
const toRenderEmptyMediumInput = (input) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="" class="required-borders medium-input">`
}
/*----------_To Render Empty LargeInput_----------*/
const toRenderEmptyLargeInput = (input) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="" class="required-borders large-input">`
}
/*----------_To Render Empty XLargeInput_----------*/
const toRenderEmptyXLargeInput = (input) => {
    document.getElementById("dom-"+input).innerHTML = `<input id="${input}" type="text" value="" class="required-borders xl-input">`
}
/*----------///_GETTING VALUE BY DISCARTING OPTIONS FOR SELECTED INPUTS_///----------*/
const discartingOptions = (actualInputValue, alternativeValue) => {
    if (actualInputValue == "" && alternativeValue == "SI") {
        return "NO"
    }
    else {
        return ""
    }
}
/*----------///_IT WAS YES OR NO SELECTED?_///----------*/
const isItYesOrNo = (actualInputValue) => {
    if (actualInputValue == "SI" || actualInputValue == "null") {
        return "NO"
    }
    else {
        return "SI"
    }
}
/*----------///_EMPTY SELECTED INPUTS RENDERER_///----------*/
const toRenderEmptySelectedInput = (element, actualInputValue, alternativeValue, chosenByDiscarding) => {
    if (actualInputValue == null) {
        actualInputValue = "NO"
        document.getElementById(element).innerHTML = `
            <select class="required-borders borderless" id=${element}>
                <option value="${actualInputValue}">${actualInputValue}</option>
                <option value="${alternativeValue}">${alternativeValue}</option>
                <option value="${chosenByDiscarding}">${chosenByDiscarding}</option>
            </select>
        ` 
    }
    else {
        document.getElementById(element).innerHTML = `
            <select class="required-borders borderless" id=${element}>
                <option value="${actualInputValue}">${actualInputValue}</option>
                <option value="${alternativeValue}">${alternativeValue}</option>
                <option value="${chosenByDiscarding}">${chosenByDiscarding}</option>
            </select>
        ` 
    }
}
/*----------///_CHANGE H1 DEPENDING ON THE STUDY_///----------*/
const changeFormTitle = () => {
    let select = document.getElementById("studies");
    let selectValue = select.options[select.selectedIndex].value;

    if (selectValue === "study-6") {
        document.getElementById("formTitle").innerHTML = `<h1>PROTOCOLO CT</h1>`
    }
    else if (selectValue === "study-7") {
        document.getElementById("formTitle").innerHTML = `<h1>PROTOCOLO PET-CT</h1>`
    }
    else {
        document.getElementById("formTitle").innerHTML = `<h1>PET-CT</h1>`
    }
}
