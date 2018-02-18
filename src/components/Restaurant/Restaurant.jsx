import React from 'react'
import { connect } from 'react-redux'
import { CheckoutButton } from '../CheckoutButton/CheckoutButton.jsx'
import * as _ from 'lodash'
import restaurantList from '../RestaurantList/RestaurantList.json'
import style from './Restaurant.scss'
import * as CheckoutAction from '../../redux/Checkout/checkoutAction';
import { bindActionCreators } from 'redux'

@connect(mapStateToProps, mapDispatchToProps)
export class Restaurant extends React.Component{
    constructor(){
        super()
    }
    render(){
        const { cityName, restaurantId } = this.props
        return(
            <div className={style.restaurantContainer}>
                {_.map(restaurantList, restaurants => {
                const restaurant = _.find(restaurants, restaurant => (restaurant.id === restaurantId))
                return(
                    <div>
                        <div className={style.header}>
                            <div><CheckoutButton/></div>
                            <img className={style.restaurantMainImage} src={restaurant.image}/>
                            <div className={style.welcomeText}>
                                <h1>{restaurant.name}</h1>
                                <span>Welcome to {cityName}</span>
                                <div>The best {restaurant.category} !
                                    Your food will be ready in {restaurant.preparationTime}...
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.categorizingFoods(restaurant, 'food')}
                            {this.categorizingFoods(restaurant, 'drink')}
                            {this.categorizingFoods(restaurant, 'dessert')}
                        </div>
                    </div>)
                })
                }
            </div>
        )
    }
    categorizingFoods = (restaurant, choice) => {
        const items = _.reduce(restaurant.menu, (coll, menu) => {
            if(menu.category === choice){
                return [...coll, menu]
            }
            return coll
        }, [] )
        return (
            items.length > 0 && (<div className={style.foodPart}>
                <a>{choice}</a>
                <div className={style.foodList}>
                {_.map(items, item => (
                    <div className={style.foods}>
                        <a>{item.name}</a>
                        <img src={item.image} />
                        <a>{item.price} BFC</a>
                        <div onClick={() => this.addToShoppingList(item)}
                            className={style.addToBasketButton}>Add 1 To Basket</div>
                    </div>
                ))}
                </div>
            </div>)
        )
    }
    addToShoppingList = (item) => {
        console.log('item', item)
        const { checkoutAction, totalShoppingItem } = this.props
        checkoutAction.setTotalShoppingList(totalShoppingItem)
    }
}

function mapStateToProps(state){
    return {
        cityName: state.location.cityName,
        totalShoppingItem: state.checkout.totalShoppingItem,
    }
}
function mapDispatchToProps( dispatch ) {
    return {
        checkoutAction : bindActionCreators(CheckoutAction, dispatch)
    }
}
