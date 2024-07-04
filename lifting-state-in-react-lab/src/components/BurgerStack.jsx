

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>-</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;
  