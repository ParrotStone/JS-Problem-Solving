'use strict';


function HtmlElement() {
    this.click = function () {
        console.log('click');
    };
}

HtmlElement.prototype.focus = function () {
    console.log('focus');
};

HtmlElement.prototype.render = function () {
    console.log('render');
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

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.render = function () {
    return `
<select>
    ${this.items.map(item => `<option>${item}</option>`).join('\n\t')}
</select >`;
};

function ImgElement(src) {
    this.src = src;
}

ImgElement.prototype = new HtmlElement();
ImgElement.prototype.constructor = ImgElement;

ImgElement.prototype.render = function () {
    return `<img src="${this.src}" alt="" />`;
};


const hse = new HtmlSelectElement([1, 2, 3]);
const img = new ImgElement('https://');

const elements = [hse, img];

for (const ele of elements)
    console.log(ele.render());

