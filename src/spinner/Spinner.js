/**
 * Canvas COMPONENT - Method draw required by Canvas
 * Method draw should contain all other methods responsible
 * for complete drawing of element
 */
export default class Spinner {
    constructor(canvas){
        this.angle = 0;
        this.startAngle = 0;
        this.rgba = [255, 255, 0, 1];
        this.color = `rgba(${this.rgba[0]}, ${this.rgba[1]}, ${this.rgba[2]}, ${this.rgba[3]})`;
        this.frame = {
                col: {
                    r: 0, g: 255, b: 255, a: 1
                },
                radius: 100,
                elementRadius: 65,
                innerRadius: 30,
                margin: 2,
            };
        this.canvas = canvas.getCanvas();
    }

    draw = () => {
        this.drawSpinnerFrame();
        //this.drawCircle();
    }

    drawSpinnerFrame = (count = 12) => {
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
            this.canvas.ctx.fillStyle = this.canvas.canvasColor;

            const startAngle = (Math.PI / 180) * (((360/count) * i) + this.frame.margin);
            const endAngle = (Math.PI / 180) * (((360/count) * (i+1)) - this.frame.margin);
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

    drawCircle = () => {
        this.angle += 2;
        if(this.angle === 360) {
            setTimeout(()=>{
                this.angle = 0;
            }, 400)
        }
        if(this.angle > 360) this.angle = 361;
        //this.canvas.ctx.save();
        this.canvas.ctx.beginPath();
        /*
        const gradient = this.canvas.ctx.createLinearGradient(
            this.canvas.width/2 - 25,
            this.canvas.height/2 - 25,
            this.canvas.width/2 + 25,
            this.canvas.height/2 + 25
        );
        gradient.addColorStop(0, '#444400');
        gradient.addColorStop(0.5, '#999900');
        gradient.addColorStop(1, '#ffff00');
        */
        //this.canvas.ctx.fillStyle = '#ffff00';
        //this.canvas.ctx.fillStyle = gradient;
        this.color = `rgba(${this.rgba[0]}, ${this.rgba[1]}, ${this.rgba[2]}, ${this.rgba[3]})`;

        this.canvas.ctx.strokeStyle = this.color;

        this.canvas.ctx.fillStyle = this.color;

        this.rgba[0] -= 0.5;
        this.rgba[1] -= 0.5;

        this.canvas.ctx.lineWidth = 25;
        const angle = (Math.PI / 180) * this.angle;
        this.canvas.ctx.arc(this.canvas.width/2, this.canvas.height/2, 50,this.startAngle, angle+0.5, false);
        this.startAngle = angle;
        this.canvas.ctx.stroke();
        //this.canvas.ctx.fill();

        //this.canvas.ctx.restore();
    }
}