//----------///_INPUTS_///----------//
const typedInputs = ["input-1","input-2","input-3","input-4","input-5","input-6","input-7","input-8","input-9","input-10","input-11","input-13","input-14","input-16"]

const selectedInputs = ["hospitalizedValues","input-12","input-15"]

const allInputs = [...typedInputs, ...selectedInputs]

//----------///_TECHNOLOGIST OR MEDIC FORM?_///----------//
let whatPageAmIOn = document.getElementById("input-5")
if (whatPageAmIOn.classList.contains("required-borders")) {
    localStorage.setItem("onMedicForm", "true");
} else (localStorage.setItem("onMedicForm", "false"))

//----------///_PRINT TECHNOLOGIST FORM_///----------//
document.getElementById("printer").addEventListener("click", print);

//----------///_HOSPITALIZED SELECTOR_///----------//
document.getElementById("hospitalizedValues").addEventListener("change", isHospitalized)

//----------///_MEDIC FORM_///----------//
document.getElementById("medicForm").addEventListener("click", technologistFormToMedicForm)

//----------///_TECHNOLOGIST FORM_///----------//
document.getElementById("technologistForm").addEventListener("click", medicFormToTechnologistForm)

//----------///_SAVE VALUES BUTTON_///----------//
document.getElementById("saveValues").addEventListener("click", saveValuesToLocalStorage)

//----------///_REMOVE KEYS TO LOCAL STORAGE BUTTON_///----------//
document.getElementById("removeKeys").addEventListener("click", removeKeysToLocalStorage)

//----------///_TO CHANGE FORM TITLE_///----------//
document.getElementById("studies").addEventListener("change", changeFormTitle)

//----------///_UPDATED INPUTS RENDERER_///----------//
for(const input of typedInputs) {
    let localStorageValue = localStorage.getItem(input)
    let actualInputValue = document.getElementById(input).value
    actualInputValue = localStorageValue
    let actualInputID = document.getElementById(input)
    if (actualInputID.classList.contains("xs-input")) {
        toRenderXSmallInput(input, actualInputValue)
    }
    else if (actualInputID.classList.contains("small-input")) {
        toRenderSmallInput(input, actualInputValue)
    }
    else if (actualInputID.classList.contains("medium-input")) {
        toRenderMediumInput(input, actualInputValue)
    }
    else if (actualInputID.classList.contains("large-input")) {
        toRenderLargeInput(input, actualInputValue)
    }
    else if (actualInputID.classList.contains("xl-input")) {
        toRenderXLargeInput(input, actualInputValue)
    }
}
//----------///_EMPTY INPUTS RENDERER_///----------//
for(const input of typedInputs) {
    let actualInputID = document.getElementById(input)
    let actualInputValue = document.getElementById(input).value
    if (actualInputID.classList.contains("xs-input") && actualInputValue === "null") {
        toRenderEmptyXSmallInput(input)
    }
    else if (actualInputID.classList.contains("small-input") && actualInputValue === "null") {
        toRenderEmptySmallInput(input)
    }
    else if (actualInputID.classList.contains("medium-input") && actualInputValue === "null") {
        toRenderEmptyMediumInput(input)
    }
    else if (actualInputID.classList.contains("large-input") && actualInputValue === "null") {
        toRenderEmptyLargeInput(input)
    }
    else if (actualInputID.classList.contains("xl-input") && actualInputValue === "null") {
        toRenderEmptyXLargeInput(input)
    }
}
//----------///_TO RENDERER NEITHER EMPTY INPUTS OR INPUTS WITH VALUES_///----------//
for (let index = 0; index < selectedInputs.length; index++) {
    const element = selectedInputs[index];
    let localStorageValue = localStorage.getItem(element)
    let actualInputValue = document.getElementById(element).value
    actualInputValue = localStorageValue
    let alternativeValue = isItYesOrNo(actualInputValue)
    let chosenByDiscarding = discartingOptions(actualInputValue, alternativeValue)
    if (element == "hospitalizedValues") {
        toRenderEmptySelectedInput(element, actualInputValue, alternativeValue, chosenByDiscarding) 
    }
    else if (element =="input-12" || element == "input-15") {
        toRenderEmptySelectedInput(element, actualInputValue, alternativeValue, chosenByDiscarding)      
    }
}
