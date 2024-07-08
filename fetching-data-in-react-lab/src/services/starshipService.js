const BASE_URL = "https://swapi.dev/api/starships";

const searchForStarship = async (starship) => {
    try {
        const queryString = starship ? "/?search=" + starship : '';
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { searchForStarship };