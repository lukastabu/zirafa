console.log('CLASS');


class Cat {

    constructor(catName, age) {
        this.name = catName;
        this.age = age;
    }

    say() {
        console.log('Miauuuuu!');
    }

    sayCatName() {
        console.log(this.name);
    }

}


const cat1 = new Cat('Pilkis', 4);
const cat2 = new Cat('Pūkis', 7);
cat2.color = 'white';


console.log(cat1);
console.log(cat2);

cat1.sayCatName();
cat2.sayCatName();

// const catsName = ['Pilkis', 'Rainius'];

// const cat1Name = catsName[0];
// const cat2Name = catsName[1];

const [cat1Name, cat2Name] = ['Pilkis', 'Rainius'];


console.log(`1: ${cat1Name} o 2: ${cat2Name}`);