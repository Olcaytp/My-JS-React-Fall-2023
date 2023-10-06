// Arrays Exercise

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
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  const numberOfPokemons = pokemons.length;
  console.log(`I have ${numberOfPokemons} pokemons!`);
};
// countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort();
};
orderThem();
// console.log(pokemons);

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
};
flipThem();
// console.log(pokemons);

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  // hint: use toUpperCase()
  pokemons.forEach(function(pokemon) {
    console.log(pokemon.toUpperCase());
  });
};
// makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  // hint: use startsWith()
  pokemons.forEach(function(pokemon) {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  });
};
// onlyTheBs();

// Filter out pokemons that start with "C"
const filteredPokemons = pokemons.filter(pokemon => !pokemon.startsWith("C"));

// Print the filtered pokemons array
console.log(filteredPokemons);

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, index) => {
    const pokemonNumber = index + 1;
    console.log(`Number ${pokemonNumber} - ${pokemon}`);
  });
};
nameAndIdThanks();

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(`You caught ${name}! Updated list:`, pokemons);
};
catchPokemon("Pikachu");

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  const isCaught = pokemons.includes(name);
  if (isCaught) {
    console.log(`You caught ${name}!`);
  } else {
    console.log(`You didn't catch ${name}.`);
  }
};
didICatchIt("Pikachu");

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy");
  console.log("Added Clefairy in the third place. Updated list:", pokemons);
};
addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let longestName = "";
  pokemons.forEach(pokemon => {
    if (pokemon.length > longestName.length) {
      longestName = pokemon;
    }
  });
  console.log(`The Pokemon with the longest name is: ${longestName}`);
};
theLongestName();