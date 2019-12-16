'use strict';

function HtmlElement() {
    this.click = function () {
        console.log('click');
    };
}

HtmlElement.prototype.focus = function () {
    console.log('focus');
};

const ht = new HtmlElement();

function HtmlSelectElement(elements = []) {
    this.items = elements;
    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        const loc = this.items.indexOf(item);
        this.items.splice(loc, 1);
    };
}

// It'll be like the 'click' method was defined in the prototype of the HtmlSelectElement constructor prototype
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const hse = new HtmlSelectElement();
