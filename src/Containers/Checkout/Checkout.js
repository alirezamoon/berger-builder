import React from 'react'
import CheckoutSummary from './../../Components/Order/CheckoutSummary/CheckoutSummary'
class Checkout extends React.Component {
    
    state ={
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 1,
            cheese: 1
        }
    }
    checkoutCanseledHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }
    render() {
        return(
        <div>
            <CheckoutSummary 
            ingredients={this.state.ingredients}
            checkoutCanseled={this.checkoutCanseledHandler}
            checkoutContinued={this.checkoutContinuedHandler} />
        </div>
    )}
}

export default Checkout