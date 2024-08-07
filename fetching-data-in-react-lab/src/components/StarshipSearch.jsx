import { useState } from "react";

const StarshipSearch = (props) => {
    const [starship, setStarship] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.searchStarships(starship);
        setStarship('');
    }

    const _handleStarshipChange = (event) => {
        setStarship(event.target.value);
    };

    return (
        <section>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Search Term:
                    <input 
                        type="search"
                        placeholder="Death Star"
                        autoFocus
                        onChange={ _handleStarshipChange }
                        value={ starship }
                        required
                    />
                </label>
                <button>Search</button>
            </form>
        </section>
    );
};

export default StarshipSearch;