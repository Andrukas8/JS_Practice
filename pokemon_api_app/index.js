
// 1st way to fetch
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         } else {
//             return response.json();
//         }
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

// 2nd way to fetch (using async and await)

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        } else {
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        }
    }
    catch (error) {
        console.error(error);
    }
}

