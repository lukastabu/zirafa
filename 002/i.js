function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let aukstas = 0; aukstas < 3; aukstas++) {
    console.log('Aukštas:', aukstas);
}


for (let i = 0; i < 3; i++) {
    console.log('Africa');
}





for (let i = 0; i < 3; i++) {

    console.log(rand(3, 13));

}


for (let i = 0; i < 3; i++) {

    console.log(5 + 8);

}



for (let i = 0; i < 15; i++) {

    let sk1 = rand(5, 15);
    let sk2 = rand(5, 15);
    console.log(sk1, 'X', sk2, '=', sk1 * sk2);

}

console.log('------------------------------------------');

for (let i = 0; i < 10; i++) {

    let kauliukas = rand(1, 6);

    if (kauliukas > 3) {
        console.log(kauliukas);
    }


}


console.log('------------------------------------------');

for (let i = 0; i < 10; i++) {

    let kauliukas = rand(1, 6);

    if (kauliukas < 3) {
        console.log(kauliukas);
    } else {
        console.log('Valio!');
    }

}


console.log('------------------------------------------');

for (let i = 0; i < 20; i++) {

    let skaicius = rand(5, 105);

    if (skaicius % 2 == 0) {
        console.log(skaicius);
    }

}

console.log('------------------------------------------');


let kibiras = 0;


for (let i = 0; i < 20; i++) {
    let siuksliu = rand(5, 105);
    kibiras += siuksliu;
}

console.log(kibiras);