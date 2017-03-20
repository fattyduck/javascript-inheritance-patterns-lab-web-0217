function inherit(Parent, Child){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Point(xPoint, yPoint){
  this.xPoint = xPoint;
  this.yPoint = yPoint;
  this.toString = () =>  `${this.xPoint}, ${this.yPoint}`;
}

function Side(length){
  this.length = length;
}

function Shape() {
  this.position = undefined;
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
};

Shape.prototype.move = function(x, y) {
  this.position.xPoint = x;
  this.position.yPoint = y;
};

function Circle(radius){
  this.radius = radius;
  this.diameter = () => this.radius * 2
  this.area = () => (this.radius * this.radius) * Math.PI
  this.circumference = () => this.radius * Math.PI * 2
}

inherit(Shape, Circle)

function Polygon(sides){
  this.sides = sides
}

inherit(Shape, Polygon)

Polygon.prototype.perimeter = function(){
  return this.sides.reduce((total, side) => {
    total += side.length;
    return total;
  }, 0)
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour){
  this.sides = [new Side(sideOne), new Side(sideTwo),
    new Side(sideThree), new Side(sideFour)]
}

inherit(Polygon, Quadrilateral)

function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

inherit(Quadrilateral, Rectangle)

Rectangle.prototype.area = function(){
    return this.width * this.height
}

function Square(length){
  Rectangle.call(this, length, length)
  this.length = length
}

inherit(Rectangle, Square)

Square.prototype.listProperties = function(){
  return Object.keys(this).toString;
}

function Triangle(sideOne, sideTwo, sideThree){
  this.sides = [new Side(sideOne), new Side(sideTwo), new Side(sideThree)]
}

inherit(Polygon, Triangle)
