export class Control2{
    constructor(controlName, parentName){
        this.controlName = controlName;
        this.parentName = parentName;
        this.element = document.createElement("div");
        const nameDiv = document.createElement("div");
        nameDiv.innerText = `${this.controlName}`
        this.element.appendChild(nameDiv);
        const parent = document.getElementById(`${this.parentName}`)
        parent.appendChild(this.element)
        this.button = document.createElement("button");
 
        this.input;
    }
}
 