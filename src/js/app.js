import "../scss/app.scss";




window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  

  let pokemons = [];
  // let pokemon = '';


  async function fetchPokemons() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const pokemonsList = await result.json();

    pokemons = pokemonsList.results;

    console.log(pokemons);

    pokemons.forEach(element => {
      let pokemon = element.name;
      // console.log(pokemon);
      const li = document.createElement("li");
      li.innerHTML = element.name;
      console.log(li);
      ul.appendChild(li);
    });
  }
  
  fetchPokemons();




});