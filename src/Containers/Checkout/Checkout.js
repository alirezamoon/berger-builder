import React from 'react'
import CheckoutSummary from './../../Components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'

class Checkout extends React.Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price })
    }


    checkoutCanseledHandler = () => {
        this.props.history.goBack()
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanseled={this.checkoutCanseledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.url + '/contact-data'}
                    render={(props) => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        {...props} />)} />
            </div>
        )
    }
}

export default Checkout