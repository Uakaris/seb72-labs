const PlanetCard = ({ planet }) => {
    return (
        <li>
            <h2>{ planet.name }</h2>
            <p>Population: { planet.population }</p>
            <p>Climate: { planet.climate }</p>
            <p>Terrain: { planet.terrain }</p>
        </li>
    )
};

export default PlanetCard;