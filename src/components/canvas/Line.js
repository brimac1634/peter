function Floater(x,y,xEnd,yEnd,c,color = 'rgb(253,171,5, 0.4)') {
  this.x = x;
  this.y = y;
  this.xEnd = xEnd;
  this.yEnd = yEnd;
  this.c = c;
  this.dx = Math.random() < 0.5 ? -0.1 : 0.1;
  this.dy = Math.random() < 0.5 ? -0.1 : 0.1;
  
  this.draw = function() {
    this.c.globalAlpha = this.alpha;
    this.c.beginPath();
    this.c.lineCap = "round";
    this.c.moveTo(this.x, this.y);
    this.c.strokeStyle = color; 
    this.c.lineTo(this.xEnd, this.yEnd);
    this.c.stroke();
  }

  this.update = function() {
    if (this.xEnd <= -10 || this.xEnd >= this.c.canvas.width) this.dx = -this.dx;
    if (this.yEnd <= this.c.canvas.height * 0.2 || this.yEnd >= this.c.canvas.height * 1) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.xEnd += this.dx;
    this.yEnd += this.dy;

    this.draw();
  }
}

export default Floater;