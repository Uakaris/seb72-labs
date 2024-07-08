import { useState, useEffect } from 'react';

import * as starshipService from '../services/starshipService';
import StarshipSearch from '../components/StarshipSearch';
import StarshipList from '../components/StarshipList'
import '../App.css';

const StarshipInfo = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchData = async (starship) => {
            const data = await starshipService.searchForStarship(starship);
            setStarships(data.results);
        };
        fetchData();
    }, []);

    const searchStarships = async (searchTerm) => {
        const data = await starshipService.searchForStarship(searchTerm);
        setStarships(data.results);
    }

    return (
        <main>
            <h1>Star Wars API</h1>
            <StarshipSearch searchStarships={ searchStarships } />
            <StarshipList starships={ starships } />
        </main>
    );
};

export default StarshipInfo;