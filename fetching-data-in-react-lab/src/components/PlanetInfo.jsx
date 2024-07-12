import { useState, useEffect } from 'react';

import * as planetService from '../services/planetService';
import PlanetSearch from './PlanetSearch';
import PlanetList from './PlanetList'
import '../App.css';

const PlanetInfo = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async (planet) => {
            const data = await planetService.searchForPlanet(planet);
            setPlanets(data.results);
        };
        fetchData();
    }, []);

    const searchPlanets = async (searchTerm) => {
        const data = await planetService.searchForPlanet(searchTerm);
        setPlanets(data.results);
    }

    return (
        <main>
            <h1>Star Wars API</h1>
            <PlanetSearch searchPlanets={ searchPlanets } />
            <p>Number of results: { planets.length }</p>
            <PlanetList planets={ planets } />
        </main>
    );
};

export default PlanetInfo;