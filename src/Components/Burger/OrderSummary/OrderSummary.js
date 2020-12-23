import React from 'react'
import Aux from './../../../hoc/Auxx'
import classes from './OrderSummary.module.css'


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}</li>
        })
    // let display = ''
    // props.purchasing ? display = classes.d-block : display = classes.d-none
    return (
        // <Aux>
        //     {
        //         props.purchasing ?
        //             <Aux>
        //                 <h3>Your Order</h3>
        //                 <p>A delicious burger with the following ingredients:</p>
        //                 <ul>
        //                     {ingredientSummary}
        //                 </ul>
        //                 <p>Continue to Checkout?</p>
        //             </Aux>
        //             : null

        //     }
        // </Aux>
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>

    )
}

export default orderSummary