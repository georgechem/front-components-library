
export default class Spinner {
    constructor(canvas){
        this.angle = 0;
        this.canvas = canvas.getCanvas();
    }

    draw = () => {
        this.drawCircle();
    }

    drawCircle = () => {
        this.angle += 5;
        if(this.angle === 360) {
            setTimeout(()=>{
                this.angle = 0;
            }, 400)
        }
        if(this.angle > 360) this.angle = 361;
        this.canvas.ctx.save();
        this.canvas.ctx.beginPath();
        const gradient = this.canvas.ctx.createLinearGradient(
            this.canvas.width/2 - 25,
            this.canvas.height/2 - 25,
            this.canvas.width/2 + 25,
            this.canvas.height/2 + 25
        );
        gradient.addColorStop(0, '#444400');
        gradient.addColorStop(0.5, '#999900');
        gradient.addColorStop(1, '#ffff00');
        //this.canvas.ctx.fillStyle = '#ffff00';
        this.canvas.ctx.fillStyle = gradient;
        //this.canvas.ctx.strokeStyle = '#ffff00';
        this.canvas.ctx.strokeStyle = gradient;
        this.canvas.ctx.lineWidth = 25;
        const angle = (Math.PI / 180) * this.angle;
        this.canvas.ctx.arc(this.canvas.width/2, this.canvas.height/2, 50,0, angle, false);

        this.canvas.ctx.stroke();
        //this.canvas.ctx.fill();

        this.canvas.ctx.restore();
    }
}