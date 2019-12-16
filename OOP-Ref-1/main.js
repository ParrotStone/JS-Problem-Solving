'use strict';

// Composition using mixins - Encapsulation - (ES5-OOP JS)
// Favor Composition over inheritance especially when inheritance goes beyond 1-level hierarchy

function mixin(targetObj, ...sources) {
    Object.assign(targetObj, ...sources);
}

// Feature #1
const canEat = {
    eat() {
        this.hunger--;
        console.log('eat');
    }
};

// Feature #2
const canWalk = {
    walk() {
        console.log('walk');
    }
};

// Feature #3
const canSwim = {
    swim() {
        console.log('swim');
    }
};


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hunger = 50;
}

mixin(Person.prototype, canEat, canWalk);

function Goldfish(name, age) {
    this.name = name;
    this.age = age;
    this.hunger = 10;
}

const abdo = new Person('abdo', 21);
console.log(abdo.hunger);

mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish('nemo', 2);
console.log(goldfish.hunger);
