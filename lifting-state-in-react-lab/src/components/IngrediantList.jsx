import { availableIngredients } from "../App";

// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return <ul>{ props.availableIngredients.map((availableIngredient) => (
        <li style={{backgroundColor: availableIngredient.color}} key={ availableIngredient.name }>{ availableIngredient.name }</li>
    ))} </ul>;
  };
  
  export default IngredientList;
  
  // we need to update state
  // add ingrediant to state. Watch out for replacing state. SPread the old state and pass the new state in.
  //