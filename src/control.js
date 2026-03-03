export class Control{
constructor(controlName){
this.controlName = controlName
this.element = document.createElement("div")
const nameDiv = document.createElement("div")

nameDiv.innerText = `${this.controlName}`
this.element.appendChild(nameDiv)

const controlPanel = document.getElementById("controlPanel")
controlPanel.appendChild(this.element)


this.inputElement = document.createElement("input") //this znamena, ze si to ta trida bude pamatovat (na rozdil od const)
this.element.appendChild(this.inputElement);


this.buttonElement = document.createElement("button")
this.buttonElement.innerText = "Odeslat"
this.element.appendChild(this.buttonElement);

}





}
