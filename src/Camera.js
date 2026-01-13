export class Camera {
    constructor(scene, world, x, y) {
        this.scene = scene;
        this.world = world;

        this.position = { x: x, y: y };

        this.isDragging = false;
        this.lastMousePosition = { x: 0, y: 0 };

        this.registerEvents();
    }

    moveCamera(x, y) {
        this.position = { x: x, y: y };

        this.translateWorld();
    }

    translateWorld() {
        this.world.style.left = `${this.position.x}px`;
        this.world.style.top = `${this.position.y}px`;
    }

    registerEvents() {
        this.scene.addEventListener("mousedown", (e) => this.onMouseDown(e));
        window.addEventListener("mousemove", (e) => this.onMouseMove(e));
        window.addEventListener("mouseup", (e) => this.onMouseUp(e));

        this.world.addEventListener("contextmenu", (e) => e.preventDefault());
    }

    onMouseDown(e) {
        if(e.button === 2) {
            this.isDragging = true;
            this.lastMousePosition = { x: e.clientX, y: e.clientY };
        }
    }

    onMouseMove(e) {
        if(!this.isDragging) return;

        const currentMousePosition = { x: e.clientX, y: e.clientY };
        const positionChange = { 
            x: currentMousePosition.x - this.lastMousePosition.x, 
            y: currentMousePosition.y - this.lastMousePosition.y
        };

        this.position = { 
            x: this.position.x + positionChange.x,
            y: this.position.y + positionChange.y
        };
        
        this.lastMousePosition = currentMousePosition;

        this.translateWorld();
    }

    onMouseUp(e) {
        if(e.button === 2) {
            this.isDragging = false;
        }
    }

}