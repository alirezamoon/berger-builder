import React from 'react'
import Button from './../../../Components/UI/Button/Button'
import classes from './ContactData.module.css'

class ContactData extends React.Component {
    
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    
    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form className={classes.Form}>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Your Email' />
                    <input className={classes.Input} type='text' name='street' placeholder='Street' />
                    <input className={classes.Input} type='text' name='postalCode' placeholder='Postal Code' />
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData