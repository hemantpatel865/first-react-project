import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted;
        this.setState({
            ingredients: updatedIngredients
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCounted = oldCount - 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        }
        
        updatedIngredients[type] = updatedCounted;
        this.setState({
            ingredients: updatedIngredients
        })
    }

    render() {
        
        return (
            <Auxiliary>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            removeIngredients = {this.removeIngredientHandler} 
            ingredientAdded={this.addIngredientHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;