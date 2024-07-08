const StarshipCard = ({ starship }) => {
    return (
        // <section>
        //     <h2>{ starship.name }</h2>
        //     <ul>
        //     <li>Class: { starship.starship_class }</li>
        //     <li>Manufacturer: { starship.manufacturer }</li>
        //     <li>Model: { starship.model }</li>
        //     </ul>
        // </section>
        <section>
            <ul>
                <li>
                    <h2>{ starship.name }</h2>
                    <p>Class: { starship.starship_class }</p>
                    <p>Manufacturer: { starship.manufacturer }</p>
                    <p>Model: { starship.model }</p>
                </li>
            </ul>
        
    </section>
    )
};

export default StarshipCard;