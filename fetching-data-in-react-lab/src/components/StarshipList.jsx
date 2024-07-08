import StarshipCard from '../components/StarshipCard';

const StarshipList = (props) => {
    const starshipListItems = props.starships.map((starship) => (
        <StarshipCard key={ starship.name } starship={ starship } />    
    ));
    return (
        <>
        <ul>
           { starshipListItems }
        </ul>
        </>
    )
};

export default StarshipList;