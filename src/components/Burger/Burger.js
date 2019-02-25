import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import Auxiliary from '../../hoc/Auxiliary'

const Burger = (props) => (
  <Auxiliary>
    <BurgerIngredient type="bread-top"></BurgerIngredient>
    <BurgerIngredient type="bread-bottom"></BurgerIngredient>
  </Auxiliary>
)

export default Burger;
