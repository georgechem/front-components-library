
export default class Canvas {
    constructor(canvas, update = false){
        this.canvas = canvas;
        this.frame = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.components = [];
        this.ctx = this.canvas.getContext('2d');
        if(update){
            window.onresize = this.onResizeUpdate;
        }
        this.#initCanvas();
        window.requestAnimationFrame(this.draw);

    }

    /**
     * When user resize window update canvas ONLY if isActive
     */
    onResizeUpdate = () => {
        if(!this.isActive) return;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.#initCanvas();
    }
    /**
     * Initialize canvas
     */
    #initCanvas = () => {
        this.isActive = true;
        this.linearGradient = this.ctx.createLinearGradient(
            0, 0,
            this.canvas.width,
            this.canvas.height
        );
        this.linearGradient.addColorStop(0, '#114400');
        this.linearGradient.addColorStop(0.5,'#775500');
        this.linearGradient.addColorStop(1, '#113300');
        this.initialBackgroundColor = this.linearGradient;
        this.canvasColor = this.initialBackgroundColor;
        this.ctx.fillStyle = this.initialBackgroundColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    /**
     * Unmount canvas
     */
    unmount = () => {
        this.canvas.width = 0;
        this.canvas.height = 0;
        this.isActive = false;
    }
    /**
     * Mount canvas
     */
    mount = () => {
        this.#initCanvas();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.draw();
    }
    /**
     * Clear canvas with background color
     */
    clearCanvas = () => {
        this.ctx.fillStyle = this.canvasColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    /**
     * Returns instance of canvas Method required by components !
     * @returns {Canvas}
     */
    getCanvas = () => {
        return this;
    }
    /**
     * Add component to the canvas
     * @param component
     */
    addComponent = (component) => {
        this.components.push(component);
    }
    /**
     * Remove component from canvas
     * @param component
     */
    removeComponent = (component) => {
        console.log(component);
        this.components = this.components.filter(item => {
            return item !== component;
        });
    }
    /**
     * Draw all currently mounted components on canvas
     */
    drawComponents = () => {
        this.components.forEach(component => {
            component.draw();
        })
    }
    /**
     * Main draw loop
     */
    draw = () => {
        this.frame++;
        if(this.frame !== 0 && (this.frame % 60) === 0){
            //console.log(this.frame);
        }
        this.clearCanvas();

        this.drawComponents();

        if(this.frame > 600) return;
        if(this.isActive) window.requestAnimationFrame(this.draw);
    }

}