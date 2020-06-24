function Floater(x,y,xEnd,yEnd,c) {
  this.x = x;
  this.y = y;
  this.xEnd = xEnd;
  this.yEnd = yEnd;
  this.c = c;
  this.dx = -0.1;
  this.dy = -0.1;
  
  this.draw = function() {
    this.c.globalAlpha = this.alpha;
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.strokeStyle = 'rgb(253,171,5)';
    this.c.lineTo(this.xEnd, this.yEnd);
    this.c.stroke();
  }

  this.update = function() {
    if (this.xEnd <= -10 || this.xEnd >= this.c.canvas.width) this.dx = -this.dx;
    if (this.yEnd <= this.c.canvas.height * 0.2 || this.yEnd >= this.c.canvas.height * 1.1) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.xEnd += this.dx;
    this.yEnd += this.dy;

    this.draw();
  }
}

export default Floater;