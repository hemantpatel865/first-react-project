import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';



const INGREDIENT_PRICE = {
    salad: 10,
    bacon: 20,
    meat: 50,
    cheese: 30
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 40,
        purchasable: false,
        purchasing: false
    }

    //Update purchase state method
    updatePurchasedState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igkey => {
                // console.log(igkey)
                return ingredients[igkey];
            }).reduce((sum,el) => {
                return sum + el;
            },0);
            // console.log(sum)
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICE[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })
        
        this.updatePurchasedState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICE[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCounted = oldCount - 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        }
        
        updatedIngredients[type] = updatedCounted;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })
        this.updatePurchasedState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert('You continue');
    }

    render() {
        
        return (
            <Auxiliary>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price = {this.state.totalPrice}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            price = {this.state.totalPrice}
            removeIngredients = {this.removeIngredientHandler} 
            ingredientAdded={this.addIngredientHandler}
            purchasable={this.state.purchasable}
            purchased={this.purchaseHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;