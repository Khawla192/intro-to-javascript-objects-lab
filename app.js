const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: 'Easy',

}
 
let starterPokemon
for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true) {
        starterPokemon = pokemon[i]
        game.party.push(starterPokemon)
        if (pokemon[i].HP >= 35){
            game.party.push(pokemon[i])
        }
    }
}

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true
    }
}
console.log(game.gyms)

for (let i = 0; i < game.party.length; i++) {
    let currentPokemon = game.party[i]

    if (currentPokemon.number === 1) {
        game.party.splice(i, 1, pokemon[1])
        pokemon[1].starter = true
    } 
    if (currentPokemon.number === 4) {
        game.party.splice(i, 1, pokemon[4])
        pokemon[4].starter = true
    } 
    if (currentPokemon.number === 7) {
        game.party.splice(i, 1, pokemon[7])
        pokemon[7].starter = true

    }
    if (currentPokemon.number === 25) {
        game.party.splice(i, 1, pokemon[25])
        pokemon[25].starter = true

    }
    
}
console.log(game.party)


for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
}

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true) {
      console.log(pokemon[i].name);
    }
}

game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj)
}
game.catchPokemon(pokemon[50])

let pokeball
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj)
    this.items[0].quantity -= 1
}
game.catchPokemon(pokemon[50])
console.log(game.items)

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 6) {
      game.gyms[i].completed = true;
    }
}
console.log(game.gyms)

game.gymStatus = function() {
    const gymTally = {
      completed: 0,
      incomplete: 0
    };
  
    for (let i = 0; i < game.gyms.length; i++) {
      if (game.gyms[i].completed) {
        gymTally.completed += 1
      } else {
        gymTally.incomplete += 1
      }
    }

    console.log(gymTally);
}
game.gymStatus();
  
game.partyCount = function() {
    return game.party.length
} 
console.log(game.partyCount())

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 8) {
      game.gyms[i].completed = true;
    }
}
console.log(game.gyms);
  
console.dir(pokemon, { maxArrayLength: null })
console.log(game)