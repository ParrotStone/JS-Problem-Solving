'use strict';


// First way using local variable as the private list
let _list = [];
class Stack {
    get count() {
        return _list.length;
    }

    peek() {
        if (_list.length == 0) throw new Error('Stack is empty.');

        return _list[_list.length - 1];
    }

    push(value) {
        _list.push(value);
    }

    pop() {
        if (_list.length == 0) throw new Error('Stack is empty.');

       return _list.pop();
    }
}


// // Second way using WeakMap as a variable to hold the private list
// let _list = new WeakMap();
// class Stack {
//     constructor() {
//         _list.set(this, []);
//     }

//     get count() {
//         return _list.get(this).length;
//     }

//     peek() {
//         const _items = _list.get(this);
//         if (_items.length == 0) throw new Error('Stack is empty.');

//         return _items[_items.length - 1];
//     }

//     push(value) {
//         _list.get(this).push(value);
//     }

//     pop() {
//         const _items = _list.get(this);
//         if (_items.length == 0) throw new Error('Stack is empty.');

//         return _items.pop();
//     }
// }

// // Third way using Symbol variable as the private list
// let _list = Symbol();
// class Stack {
//     constructor() {
//         this[_list] = [];
//     }

//     get count() {
//         return this[_list].length;
//     }

//     peek() {
//         if (this[_list].length == 0) throw new Error('Stack is empty.');

//         return this[_list][this[_list].length - 1];
//     }

//     push(value) {
//         this[_list].push(value);
//     }

//     pop() {
//         if (this[_list].length == 0) throw new Error('Stack is empty.');

//         return this[_list].pop();
//     }
// }
