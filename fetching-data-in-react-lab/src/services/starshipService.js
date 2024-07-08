const BASE_URL = "https://swapi.dev/api/starships";

const searchForStarship = async (starship) => {
    try {
        const queryString = "/?search=" + starship;
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

// const indexForStarship = async (starship) => {
//     const queryString = 
// }

export { searchForStarship };