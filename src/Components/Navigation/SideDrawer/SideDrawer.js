import React from 'react'

import NavigationItems from './../NavigationItems/NavigationItems'
import Logo from './../../Logo/Logo'
import Backdrop from './../../UI/Backdrop/Backdrop'
import Aux from './../../../hoc/Auxx'

import classes from './SideDrawer.module.css'


const sideDrawer = () => {
    //...
    return (
        <Aux>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Aux>
    )
}

export default sideDrawer