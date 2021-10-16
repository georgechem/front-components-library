/**
 * Canvas COMPONENT - Method draw required by Canvas
 * Method draw should contain all other methods responsible
 * for complete drawing of element
 */
export default class Spinner {
    constructor(canvas){
        this.loadProgress = 0;
        this.throttle = true;
        this.rgba = [255, 255, 0, 1];
        this.color = `rgba(${this.rgba[0]}, ${this.rgba[1]}, ${this.rgba[2]}, ${this.rgba[3]})`;
        this.frame = {
                col: {
                    r: 0, g: 0, b: 0, a: 0.5
                },
                radius: 99,
                elementRadius: 65,
                innerRadius: 31,
                margin: 0.5,
            };
        this.canvas = canvas.getCanvas();

        this.spinnerElements= new Set();
    }

    draw = () => {
        this.#drawSpinnerFrame();
        this.#generateSpinnerElements(this.loadProgress);

        if(this.throttle){
            this.throttle = false;
            setTimeout(()=>{
                this.throttle = true;
                this.loadProgress++;
                if(this.loadProgress >= 12) this.loadProgress = 0;
            }, 200);
        }


    }

    #generateSpinnerElements = (count = 10) => {
        const elements = [...this.spinnerElements];
        if(count * 2 >= elements.length) count = elements.length / 2;
        for(let i=0; i <= count * 2; i+=2){
            this.canvas.ctx.beginPath();
            this.canvas.ctx.lineWidth = this.frame.elementRadius;
            this.barLinearGradient = this.canvas.ctx.createLinearGradient(
                this.canvas.width / 2 - this.frame.radius,
                this.canvas.height / 2 - this.frame.radius,
                this.canvas.width / 2 + this.frame.radius,
                this.canvas.height / 2 + this.frame.radius
            );
            this.barLinearGradient.addColorStop(0, `rgba(100,100,0, 0.5)`);
            this.barLinearGradient.addColorStop(0.5,`rgba(200, 200, 55, 0.25)`);
            this.barLinearGradient.addColorStop(1, `rgba(100,100,0, 0.5)`);
            this.canvas.ctx.strokeStyle = this.barLinearGradient;

            this.canvas.ctx.arc(
                (this.canvas.width / 2),
                (this.canvas.height /2),
                this.frame.elementRadius-2,
                elements[i]+0.02,
                elements[i+1]-0.02,
                false
            );

            this.canvas.ctx.stroke();
            this.canvas.ctx.closePath();
        }

    }

    #drawSpinnerFrame = (count = 12) => {
        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = `rgba(
            ${this.frame.col.r},
            ${this.frame.col.g},
            ${this.frame.col.b},
            ${this.frame.col.a}
        )`;
        this.canvas.ctx.arc(
            this.canvas.width / 2,
            this.canvas.height /2,
            this.frame.radius,
            0,
            (Math.PI / 180) * (360/1),
            false
        );
        this.canvas.ctx.fill();
        this.canvas.ctx.closePath();
        for(let i=0; i<count; i++){
            this.canvas.ctx.beginPath();
            this.canvas.ctx.lineWidth = this.frame.elementRadius;
            this.canvas.ctx.strokeStyle = this.canvas.canvasColor;
            const startAngle = (Math.PI / 180) * (((360/count) * i) + this.frame.margin);
            const endAngle = (Math.PI / 180) * (((360/count) * (i+1)) - this.frame.margin);
            this.spinnerElements.add(startAngle);
            this.spinnerElements.add(endAngle);
            this.canvas.ctx.arc(
                this.canvas.width / 2,
                this.canvas.height /2,
                this.frame.elementRadius,
                startAngle,
                endAngle,
                false
            );
            this.canvas.ctx.stroke();
            this.canvas.ctx.closePath();
        }
        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = this.canvas.canvasColor;
        this.canvas.ctx.arc(
            this.canvas.width / 2,
            this.canvas.height /2,
            this.frame.innerRadius,
            0,
            (Math.PI / 180) * (360),
            false
        );
        this.canvas.ctx.fill();
        this.canvas.ctx.closePath();
    }


}