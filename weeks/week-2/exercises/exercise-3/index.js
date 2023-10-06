// Loops & Objects Exercise


const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

function printPokemons() {
  pokemons.forEach(function(pokemon) {
    console.log(pokemon);
  });
}

// Fonksiyonu çağırarak tüm Pokémon isimlerini yazdırın
printPokemons();

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pikachu = {
  name: "Pikachu",
  element: "Electric",
  strength: "Thunderbolt",
  color: "Yellow",
  amountOfLegs: 2,
};

console.log(pikachu);
console.log(pikachu.name);         // "Pikachu"
console.log(pikachu.element);      // "Electric"
console.log(pikachu.strength);     // "Thunderbolt"
console.log(pikachu.color);        // "Yellow"
console.log(pikachu.amountOfLegs); // 2


// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

const pikachyu = {
  name: "Pikachu",
  element: "Electric",
  strength: 32,
  color: "Yellow",
  amountOfLegs: 2,
};

const pikachuInfo = `${pikachyu.name} is a ${pikachyu.element} Pokémon with the strength of ${pikachyu.strength}.`;

console.log(pikachuInfo);


// 4)
// Add the property stillToCatch: true to the Pikachu object.

pikachu.stillToCatch = true;

console.log(pikachu);

// 5)
// change the value of the key strength in the Pikachu object.

pikachu.strength = 40;

console.log(pikachu);

// 6)
// Delete a property from the Pikachu object.

delete pikachu.color;

console.log(pikachu);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13,
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32,
  },
  {
    name: "Squirtle",
    element: "water",
    strength: 35,
  },
  {
    name: "Pikachu",
    element: "electricity",
    strength: 40,
  },
  {
    name: "Pidgey",
    element: "air",
    strength: 20,
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

moreAboutPokemons.forEach(function(pokemon) {
  console.log(pokemon.name);
});

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

moreAboutPokemons.forEach(function(pokemon) {
  console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength}`);
});
