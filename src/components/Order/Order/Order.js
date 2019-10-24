import React from 'react';

import classes from './Order.css';

const order = props => {
        const orders = Object.keys(props.ingredients).map(e => {
            return <span key={e} className={classes.Ingredient}> {e} ({props.ingredients[e]})</span>
        })
    return (
        <div className={classes.Order}>
                <p>Ingredients:
                {orders}
            </p>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );
} 

export default order;