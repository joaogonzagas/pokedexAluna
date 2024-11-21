const pokemonName = document.querySelector(`.pokemon_name`);
const pokemonNumber = document.querySelector(`.pokemon_number`);
const pokemonImage = document.querySelector(`.pokemon_image`);
const loadingGif = document.querySelector(`.loading`);
const form = document.querySelector(`.form`);
const input = document.querySelector(`.input_search`);
const buttonPrev = document.querySelector(`.btn-prev`);
const buttonNext = document.querySelector(`.btn-next`);

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;

    }

}

const renderPokemon = async (pokemon) => {

        pokemonName.innerHTML = 'Carregando...';
        pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    
    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        const sprite = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonImage.src = sprite ? sprite : './lock.png';

        input.value = '';
        searchPokemon =data.id;
    } else {
        pokemonImage.computedStyleMap.display= 'none';
        pokemonName.innerHTML = 'Pokemon desconhecido';
        pokemonNumber.innerHTML = '';
        pokemonImage.src = './lock.png';
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});


buttonPrev.addEventListener('click', (event) => {
    if(searchPokemon >1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
 });

 buttonNext.addEventListener('click', (event) => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
 });


renderPokemon(1);
