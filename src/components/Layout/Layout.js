import React from 'react';
import Auxiliary from '../../hoc/Auxiliary.js'
import classes from './Layout.module.css'


const layout = (props) => (
    <Auxiliary>
        <div className={classes.Content}>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);
 
export default layout;