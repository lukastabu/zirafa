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