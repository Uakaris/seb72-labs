import { useState } from "react";

const PlanetSearch = (props) => {
    const [planet, setPlanet] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.searchPlanets(planet);
        setPlanet('');
    }

    const _handlePlanetChange = (event) => {
        setPlanet(event.target.value);
    };

    return (
        <section>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Search Term:
                    <input 
                        type="search"
                        placeholder="Tatooine"
                        autoFocus
                        onChange={ _handlePlanetChange }
                        value={ planet }
                        required
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    );
};

export default PlanetSearch;