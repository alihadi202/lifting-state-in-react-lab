// `src/components/BurgerStack.jsx`
const BurgerStack = ({burger, handleDelete}) => {

  return( <ul>{burger.map(ingredient => 
    <button onClick={()=>handleDelete(ingredient)} style={{ backgroundColor: ingredient.color }}>{ingredient.name}</button>)
    }
    </ul>
    )
  };
  
  export default BurgerStack;