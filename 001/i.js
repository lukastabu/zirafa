function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let o = rand(1, 6);
let b = rand(10, 20);

console.log(o, b);


// console.log('HeLLo KiTTy');
// console.log('HeLLo KiTTy');
// console.log('HeLLo KiTTy');


// let i = 0;

// while (i < 3) {
//     i++;
//     console.log('HeLLo KiTTy');
// }

let x;

do {
    console.log('HeLLo KiTTy');
    x = rand(10, 20);
    console.log(x);
} while (x < 15);