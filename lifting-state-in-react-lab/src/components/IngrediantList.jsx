import { availableIngredients } from "../App.jsx";


const IngredientList = ({ availableIngredients, addToBurger }) => {
    return (
      <ul>
        {availableIngredients.map((ingredient) => (
          <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;