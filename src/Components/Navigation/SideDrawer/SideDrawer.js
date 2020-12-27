import React from 'react'

import NavigationItems from './../NavigationItems/NavigationItems'
import Logo from './../../Logo/Logo'
import Backdrop from './../../UI/Backdrop/Backdrop'
import Aux from './../../../hoc/Auxx'

import classes from './SideDrawer.module.css'


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    } else {
        attachedClasses = [classes.SideDrawer, classes.Close]
    }
    return (
        <Aux>
            <Backdrop show={props.open} hide={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Aux>
    )
}

export default sideDrawer