export class Ball {
    constructor(world , width, height, color, x, y) {
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y
        this.vx = 0;
        this.vy = 0;

        this.element = document.createElement("div")  
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.border = `solid 3px ${this.color}`
        this.element.style.position = "absolute"
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`

        world.appendChild(this.element)

    }
   /* simulate () {
        this.vx = this.vx + ax * d
        this.vy = this.vy + ay * d
        this.element.style.left = `${this.x + this.vx * d}px`
        this.element.style.top = `${this.y + this.yx * d}px`
    }*/

}
