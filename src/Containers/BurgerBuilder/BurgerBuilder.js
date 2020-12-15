import React, { Component } from "react";
import Aux from "../../hoc/Auxx";
import Burger from "./../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.2,
  cheese: 0.6,
  meat: 0.7
}


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldTotalPrice = this.state.totalPrice
    const updatedTotalPrice = oldTotalPrice + priceAddition
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0){
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const oldTotalPrice = this.state.totalPrice
    const priceDeduction = INGREDIENT_PRICES[type]
    const updatedTotalPrice = oldTotalPrice - priceDeduction
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    })
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
