// ECMAScript 6

function f (x, y = 7, z = 42) {
    console.log( x + y + z) //64
}
f(15)


// ECMAScript 5

/*function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    // return x + y + z;
    console.log( x + y + z)

};
f(15);*/