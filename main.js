//Array de objetos con mis pokemones.

let pokemones = [
    {
        nombre: "Bulbasaur",
        poder: "Planta",
        vida: 45,
        ataque: 49,
        defensa: 49,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        nombre: "Charmander",
        poder: "Fuego",
        vida: 39,
        ataque: 52,
        defensa: 43,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        nombre: "Squirtle",
        poder: "Agua",
        vida: 44,
        ataque: 48,
        defensa: 65,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        nombre: "Pikachu",
        poder: "Eléctrico",
        vida: 35,
        ataque: 55,
        defensa: 40,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        nombre: "Jigglypuff",
        poder: "Normal",
        vida: 115,
        ataque: 45,
        defensa: 20,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        nombre: "Meowth",
        poder: "Normal",
        vida: 40,
        ataque: 45,
        defensa: 35,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        nombre: "Psyduck",
        poder: "Agua",
        vida: 50,
        ataque: 52,
        defensa: 48,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        nombre: "Geodude",
        poder: "Roca",
        vida: 40,
        ataque: 80,
        defensa: 100,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        nombre: "Snorlax",
        poder: "Normal",
        vida: 160,
        ataque: 110,
        defensa: 65,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        nombre: "Chikorita",
        poder: "Planta",
        vida: 45,
        ataque: 49,
        defensa: 65,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    },
    {
        nombre: "Cyndaquil",
        poder: "Fuego",
        vida: 39,
        ataque: 52,
        defensa: 43,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
    },
    {
        nombre: "Eevee",
        poder: "Normal",
        vida: 55,
        ataque: 55,
        defensa: 50,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        nombre: "Mewtwo",
        poder: "Psíquico",
        vida: 106,
        ataque: 110,
        defensa: 90,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
        nombre: "Sylveon",
        poder: "Hada",
        vida: 95,
        ataque: 65,
        defensa: 65,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
    },
    {
        nombre: "Gyarados",
        poder: "Agua",
        vida: 95,
        ataque: 125,
        defensa: 79,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        nombre: "Lucario",
        poder: "Lucha",
        vida: 70,
        ataque: 110,
        defensa: 70,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    },
    {
        nombre: "Dragonite",
        poder: "Dragón",
        vida: 91,
        ataque: 134,
        defensa: 95,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        nombre: "Gardevoir",
        poder: "Psíquico",
        vida: 68,
        ataque: 65,
        defensa: 65,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    },
    {
        nombre: "Gengar",
        poder: "Fantasma",
        vida: 60,
        ataque: 65,
        defensa: 60,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        nombre: "Alakazam",
        poder: "Psíquico",
        vida: 55,
        ataque: 50,
        defensa: 45,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        nombre: "Charizard",
        poder: "Fuego",
        vida: 78,
        ataque: 84,
        defensa: 78,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        nombre: "Machamp",
        poder: "Lucha",
        vida: 90,
        ataque: 130,
        defensa: 80,
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    }
]

let agregarPokemonUno = () => {

    let indexRandomUno = Math.floor(Math.random() * pokemones.length);
    let randomPokemon = pokemones[indexRandomUno];
    let infoPokemon =
        `<section class="info-card">

                    <img src="
                    ${randomPokemon.imagen}" alt="${randomPokemon.nombre}">

                    <h1>${randomPokemon.nombre}</h1>
                    <p>Pokemon ${randomPokemon.poder}</p>

                    <section class="footer-card">
                        <section class="footer-child">
                            <h3>${randomPokemon.vida}</h3>
                            <p>Vida</p>
                    </section>

                    <section class="footer-child">
                            <h3>${randomPokemon.ataque}</h3>
                            <p>Ataque</p>
                    </section>

                    <section class="footer-child">
                            <h3>${randomPokemon.defensa}</h3>
                            <p>Defensa</p>
                        </section>
                    </section>
         </section>`

    let informacionUno = document.querySelector("#informacionUno")

    informacionUno.innerHTML = infoPokemon
}



let btnCardUno = document.querySelector("#btnCardUno")
btnCardUno.addEventListener("click", agregarPokemonUno)


// ------------------------------------------------------------------- Agregar pokemon Dos

let agregarPokemonDos = () => {

    let indexRandomDos = Math.floor(Math.random() * pokemones.length);
    let randomPokemonDos = pokemones[indexRandomDos];
    let infoPokemonDos =
        `<section class="info-card">

                    <img src="
                    ${randomPokemonDos.imagen}" alt="${randomPokemonDos.nombre}">

                    <h1>${randomPokemonDos.nombre}</h1>
                    <p>Pokemon ${randomPokemonDos.poder}</p>

                    <section class="footer-card">
                        <section class="footer-child">
                            <h3>${randomPokemonDos.vida}</h3>
                            <p>Vida</p>
                    </section>

                    <section class="footer-child">
                            <h3>${randomPokemonDos.ataque}</h3>
                            <p>Ataque</p>
                    </section>

                    <section class="footer-child">
                            <h3>${randomPokemonDos.defensa}</h3>
                            <p>Defensa</p>
                        </section>
                    </section>
         </section>`


         let informacionDos = document.querySelector("#informacionDos")
         informacionDos.innerHTML =infoPokemonDos
}

let btnCardDos = document.querySelector("#btnCardDos");
btnCardDos.addEventListener("click", agregarPokemonDos)

// ------------------------------------------------------------------ Reiniciar batalla

let limpiarPokemones = () => {
    let informacionUno = document.querySelector("#informacionUno");
    let informacionDos = document.querySelector("#informacionDos");
    informacionUno.innerHTML = ""
    informacionDos.innerHTML = ""

   
}

let btnReiniciar = document.querySelector ("#btnReiniciar");
btnReiniciar.addEventListener ("click",limpiarPokemones)


