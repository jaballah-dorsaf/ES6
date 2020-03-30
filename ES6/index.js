let pets = [{
        name: "Max",
        type: "dog",
        bornOn: 2018
    },
    {
        name: "Angel",
        type: "cat",
        bornOn: 2015
    },
    {
        name: "Jasper",
        type: "dog",
        bornOn: 2016
    },
    {
        name: "Rex",
        type: "dog",
        bornOn: 2014
    }

];
//creer une fonction pour afficher les coordonne de chaque annimal (pet) methode ES5
//function getAge(pet) {
//return new Date().getFullYear() - pet.bornOn;
//}

//creer une fonction pour afficher les coordonne de chaque annimal (pet) methode ES6
const getAge = pet => new Date().getFullYear() - pet.bornOn

//affiche une phrase contient le nom , l'age et le type  de chaque annimal methode ES6
//let petsWithAge = [];
//for (let i = 0; i < pets.length; i++) {
//  let pet = pets[i];
//  pet.age = getAge(pet);

// petsWithAge.push(pet);
//}

//affiche une phrase contient le nom , le type et l'age de chaque annimal methode ES6 on utilise ForEach
//let petsWithAge = []
//pets.forEach((pet) => {
//   pet.age = getAge(pet)
//  petsWithAge.push(pet)
//})
//console.log(petsWithAge);


//affiche un tableau d'entier contient l'age de chaque annimal methode ES6 on utilise map
let petsWithAge = pets.map(pet =>
    pet.age = getAge(pet))
console.log(petsWithAge)

//affiche les annimaux de type dogs methode ES5
//let dogs = [];
// (let i = 0; i < pets.length; i++) {
// let pet = pets[i];
// if (pet.type === "dog") {
//     dogs.push(pet);
//  }
//}
//console.log(dogs);


//affiche les annimaux de type dogs methode ES6
let dogs = pets.filter(pet => pet.type === "dog")
console.log(dogs)

//affiche l'age de jasper methode ES5
//let jasper;
//for (let i = 0; i < pets.length; i++) {
//  let pet = pets[i];
//  if (pet.name === "Jasper") {
//       jasper = pet;
//   }
//}
//console.log("Jasper is " + jasper.age + " years old");

//affiche l'age de jasper methode ES6
let jasper = pets.find(pet => pet.name === "Jasper")
console.log('Jasper is ${Jasper.name} years old')