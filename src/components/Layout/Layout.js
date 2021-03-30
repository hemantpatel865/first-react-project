import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary.js'
import SideDrawer from '../Navgation/SideDrawer/SideDrawer.js';
import Toolbar from '../Navgation/Toolbar/Toolbar.js';
import classes from './Layout.module.css';



class Layout extends Component { 

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    
    
    
    render() {
       return (
        <Auxiliary>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
);
        }
}
export default Layout;