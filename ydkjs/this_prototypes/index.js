let o = {
    a: 'aaaaasss',
}

let ob = Object.create(null);

ob.a = "different ass";

console.log(o.a);
console.log(ob.a);

console.log('a' in o, 'a' in ob);

console.log(o.hasOwnProperty('a'));
console.log(o.hasOwnProperty.call(ob, 'a'));
// console.log(ob.hasOwnProperty('a'));


// danger
Object.prototype.test = function(){
    console.log('testing', this);
}

function m() {
    this.x = 'blaa';
    this.test = function() {
        console.log('asdfasdf', thsi.x);
    }
    console.log(this);
}


let asdf = new m();
m.test();
setTimeout(function asdfss() {
    // this._repeat = 200; // changes the interval between calls 
    // this._destroyed = true; // nothing
    console.log(this);
}, 0);