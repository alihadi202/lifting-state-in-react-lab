// src/components/IngredientList.jsx
const IngredientList = ({ingredients ,handleAdd}) => {
    return( <ul>{ingredients.map(ingredient => 
    <button onClick={()=>handleAdd(ingredient)} style={{ backgroundColor: ingredient.color }}>{ingredient.name}</button>)
    }
    </ul>
    )
  };
  
  export default IngredientList;