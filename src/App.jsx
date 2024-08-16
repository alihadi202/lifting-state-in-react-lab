// src/App.jsx

import './App.css';
import { useState } from 'react';
//compnents
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [ingredients , setIngredients] = useState(availableIngredients);
  const [burger , setBurger] = useState([]);

  const handleAdd= (ingredient) =>{
    const newBurger =[ingredient, ...burger]
    setBurger(newBurger)
  }

  const handleDelete= (ingredient) =>{
    const deleted =burger.find(burgerIngredient=>burgerIngredient===ingredient)
    if(deleted){
      const newBurger =burger.filter(burgerIngredient=>burgerIngredient!==ingredient)
      setBurger(newBurger)
    }
  }
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={ingredients} handleAdd= {handleAdd}></IngredientList>
      <BurgerStack burger={burger} handleDelete={handleDelete}></BurgerStack>
      </section>
    </main>
  );
};

export default App;