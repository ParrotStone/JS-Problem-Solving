'use strict';

// Inheritance + Polymorphism + method-overriding __ (ES5 OOP example)

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
};

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
};

Circle.prototype.draw = function () {
    console.log('draw circle');
};

function Square(length, color) {
    Shape.call(this, color);
    this.length = length;
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
    console.log('duplicate square');
};

Square.prototype.draw = function () {
    console.log('draw square');
};

function Triangle(lengthA, lengthB, lengthC, color) {
    Shape.call(this, color);
    this.lengthA = lengthA;
    this.lengthB = lengthB;
    this.lengthC = lengthC;
}

extend(Triangle, Shape);

Triangle.prototype.draw = function () {
    console.log('draw triangle');
};

Triangle.prototype.duplicate = function () {
    console.log('duplicate triangle');
};

const circle = new Circle(234, 'orange');
const square = new Square(5, 'red');
const triangle = new Triangle(2, 3, 4, 'deeporange');

const shapes = [circle, square, triangle];

for (const shape of shapes)
    shape.duplicate();