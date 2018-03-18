import React from 'react'
import { connect } from 'react-redux'
import { CheckoutButton } from '../CheckoutButton/CheckoutButton.jsx'
import * as _ from 'lodash'
import restaurantList from '../RestaurantList/RestaurantList.json'
import style from './Restaurant.scss'
import * as CheckoutAction from '../../redux/Checkout/checkoutAction';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

@connect(mapStateToProps, mapDispatchToProps)
export class Restaurant extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
        const { restaurantId } = this.props
        this.setState({
            currentRestaurant: _.map(restaurantList, restaurants => {
                return _.find(restaurants, restaurant => {
                    return restaurant.id === restaurantId
                })
            })
        })

    }

    render(){
        const { restaurantId, cityId } = this.props
        const restaurant = this.state.currentRestaurant[0]

        return(
            <div className={style.restaurantContainer}>
                <div className={style.header}>
                    <div><CheckoutButton/></div>
                    <Link to={`/restaurantList/${cityId}`} >
                        <div className={style.closeButton}>
                            X
                        </div>
                    </Link>
                    <img className={style.restaurantMainImage} src={restaurant.image}/>
                    <div className={style.welcomeText}>
                        <h1 className={style.mainTitle}>{restaurant.name}</h1>
                        <span>Welcome to {restaurantId}</span>
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
                    <div key={item.id} className={style.foods}>
                        <a>{item.name}</a>
                        <img src={item.image} />
                        <a>{item.price_bfc} BFC/ {item.price_euro}€</a>
                        <div onClick={() => this.addToShoppingList(item)}
                            className={style.addToBasketButton}>Add 1 To Basket</div>
                    </div>
                ))}
                </div>
            </div>)
        )
    }
    addToShoppingList = () => {
        const { checkoutAction, totalShoppingItem } = this.props
        checkoutAction.setTotalShoppingList(totalShoppingItem)
    }
}

function mapStateToProps(state){
    return {
        totalShoppingItem: state.checkout.totalShoppingItem,
    }
}
function mapDispatchToProps( dispatch ) {
    return {
        checkoutAction : bindActionCreators(CheckoutAction, dispatch)
    }
}
