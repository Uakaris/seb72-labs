const BASE_URL = "http https://swapi.dev/api/planets";

searchForPlanet = async (planet) => {
    try {
        const queryString = planet ? "/?search" + planet : '';
        const response = await fetch(BASE_URL + queryString);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { searchForPlanet };