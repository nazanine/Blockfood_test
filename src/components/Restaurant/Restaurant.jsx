import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
import restaurantList from '../RestaurantList/RestaurantList.json'
import style from './Restaurant.scss'
import * as CheckoutAction from '../../redux/Checkout/checkoutAction';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

const deliveryFee = 4
const totalRestaurantStart = 5

@connect(mapStateToProps, mapDispatchToProps)
export class Restaurant extends React.Component{
    constructor(){
        super()
        this.state = {
            basket: []
        }
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
        const { basket } = this.state
        const restaurant = this.state.currentRestaurant[0]

        return(
            <div className={style.restaurantContainer}>
                <div className={style.header}>
                    <div className={style.develiryAddress}>
                        <div className={style.add}>
                            <span className={style.svg}>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            Deliver to:<br/><br/>
                            Bellmoor, <br/>
                            East Heath Road, <br/>
                            Hampstead<br/>
                            NW31DY London
                        </div>
                        <div  className={style.time}>
                            <span className={style.svg}>
                                <i className='fas fa-clock'></i>
                            </span>
                            19:00
                        </div>
                    </div>

                    <div>
                        <h1 className={style.mainTitle}>{restaurant.name}</h1>
                        <div>{restaurant.category}</div>
                        <div className={style.star}>
                            {_.times(restaurant.star, () => <i className={`${style.colored} fas fa-star`}></i>)}
                            {_.times((totalRestaurantStart - restaurant.star), () => <i className={`${style.white} fas fa-star`}></i>)}
                        </div>
                    </div>
                </div>
                <div className={style.foodContainer}>
                <div className={style.foodContent}>
                    {this.categorizingFoods(restaurant, 'food')}
                    {this.categorizingFoods(restaurant, 'drink')}
                    {this.categorizingFoods(restaurant, 'dessert')}
                </div>
                    <div className={style.foodOrder}>
                        <Link to='/progress'>
                            <div className={style.validateButton} onClick={this.Validate}>
                            Validate my order
                            </div>
                        </Link>

                        <div className={`${style.foodList} ${style.devider}`}>

                            {_.map(basket, item => {
                                return (<div key={item.item.id}>
                                    <div className={style.fooName}>
                                        <span>{item.value} x {item.item.name} </span>
                                        <span className={`${style.green}`}>{item.item.price_euro * item.value} €</span>
                                    </div>
                                </div>)
                            })}
                        </div>
                        <div className={`${style.foodPriceResume} ${style.devider} ${style.borderGray}`}>
                            <div>
                                <span >Total: </span>
                                <span className={`${style.green}`}> {this.getTheTotal(false)} €</span>
                            </div>
                            <div>
                                <span>Delivery: </span>
                                <span className={`${style.green}`}> {deliveryFee} € </span>
                            </div>
                        </div>
                        <div className={`${style.foodPriceTotal} ${style.devider} ${style.borderGray}`}>
                            <div>
                                <span>TOTAL: </span>
                                <span className={`${style.green}`}> {this.getTheTotal(true)} € </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    getTheTotal = (delivery) => {
        const { basket } = this.state

        const totalPrice = _.reduce(basket, (total, item) => {
            total += (item.item.price_euro * item.value)
            return total
        }, 0)
        return delivery ? totalPrice + deliveryFee : totalPrice
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
                    <div key={item.id} className={style.foods} onClick={() => this.addToShoppingList(item, 1)}>
                        <img className={style.foodImage} />
                        <div className={style.foodTitle}><h2>{item.name}</h2></div>
                        <img src={item.image} />
                        <h3>{item.price_bft} BFT/ {item.price_euro}€</h3>
                    </div>
                ))}
                </div>
            </div>)
        )
    }
    addToShoppingList = (item, valueItem) => {
        const { basket } = this.state

        const container = basket.length ? basket : []

        const foundItem = _.find(basket, value => {
            return value.item.id === item.id
        })

        if(foundItem){
            foundItem.value = foundItem.value + valueItem
        }else{
            container.push({
                value: valueItem,
                item
            })
        }

        this.setState({
            basket : container
        })
    }
    Validate = () => {

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
