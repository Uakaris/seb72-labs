import StarshipCard from './StarshipCard';

const StarshipList = (props) => {
    const starshipListItems = props.starships.map((starship) => (
        <StarshipCard key={ starship.name } starship={ starship }  />    
    ));
    return (
        <section>
        <ul>
           { starshipListItems }
        </ul>
        </section>
    )
};

export default StarshipList;