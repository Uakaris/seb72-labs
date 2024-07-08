import { useState, useEffect } from 'react';

import * as starshipService from '../services/starshipService';
import StarshipSearch from '../components/StarshipSearch';
// import StarshipList from '../components/StarshipList'

const StarshipInfo = () => {
    const [starships, setStarships] = useState([]);

    const fetchData = async (starship) => {
        const data = await starshipService.searchForStarship(starship);
        console.log(data);
        const starshipData = {
            name: data.results.name,
            class: data.starshipClass,
            manufacturer: data.starshipManufacturer,
            model: data.starshipModel,
        }
        setStarships(data.results);
        console.log(starships);
    };

    const fetchDefaultData = async () => {
        console.log('fetching data for all starships');
        fetchData('starships');
    }

    useEffect(() => {
        fetchDefaultData();
    }, []);

    return (
        <main>
            <h1>Star Wars API</h1>
            <StarshipSearch onSubmit={ fetchData } />
        </main>
    );
};

export default StarshipInfo;