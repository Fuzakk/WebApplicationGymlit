export class Ball {
    constructor(world , width, height, color, x, y) {
        this.width = width
        this.height = height
        this.color = color
        this.world = world
        this.x = x
        this.y = y
        this.vx;
        this.vy;

this.element = document.createElement("div")  
this.element.style.width = `${this.width}px`
this.element.style.height = `${this.height}px`
this.element.style.border = `solid 3px ${this.color}px`
this.element.style.position = "absolute"
this.element.style.left = `${this.x}px`
this.element.style.top = `${this.y}px`

this.world.appendChild(this.element)

    }
}