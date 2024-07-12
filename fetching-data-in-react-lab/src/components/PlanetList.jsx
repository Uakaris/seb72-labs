import PlanetCard from "./PlanetCard";

const PlanetList = (props) => {
    const planetListItems = props.planets.map((planet) => (
        <PlanetCard key={ planet.name } planet={ planet } />
    ));
    return (
        <section>
            <ul>
                { planetListItems }
            </ul>
        </section>
    )
};

export default PlanetList;