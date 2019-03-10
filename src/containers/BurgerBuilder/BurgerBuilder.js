import React, { Component } from 'react';

import Aux from './../../hoc/Auxiliary';
import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 3,
            becon: 3,
            cheese: 2,
            meat: 2,
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;