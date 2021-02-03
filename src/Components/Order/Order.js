import React from 'react'
import classes from './Order.module.css'

const order = (props) => {
    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    console.log(ingredients)

    const ingredientOutput = ingredients.map(ig => {
        return (<span key={ig.name} className={classes.Ingredient}>{ig.name} ({ig.amount})</span>)
    })

    return (<div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>USD {props.price}</strong></p>
    </div>)
}

export default order