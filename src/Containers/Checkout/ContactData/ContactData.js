import React from 'react'
// import { withRouter } from 'react-router-dom'

import Button from './../../../Components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from './../../../axios-orders'
import Spinner from './../../../Components/UI/Spinner/Spinner'
import Input from './../../../Components/UI/Input/Input'

class ContactData extends React.Component {


    element = (input, type, placeholder, value) => {
        return {
            elementType: input,
            elementConfig: {
                type: type,
                placeholder: placeholder
            },
            value: value
        }
    }

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: this.element('input', 'text', 'Street', ''),
            zipCode: this.element('input', 'text', 'ZIP Code', ''),
            country: this.element('input', 'text', 'Country', ''),
            email: this.element('input', 'email', 'Your E-mail', ''),
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }
    orderHandler = () => {
        console.log(this.props)
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => this.setState({ loading: false }))

    }

    render() {

        let formElementArray = []
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }



        let form = (
            <form className={classes.Form}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} />
                ))}
            </form>)
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
// export default withRouter(ContactData)