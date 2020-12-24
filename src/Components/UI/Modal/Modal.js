// import { checkPropTypes } from 'prop-types'
import React from 'react'
import classes from './Modal.module.css'
import Aux from './../../../hoc/Auxx'
import Backdrop from '../../UI/Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} hide={props.hide} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} >
            {props.children}
        </div>
    </Aux>
)

export default modal