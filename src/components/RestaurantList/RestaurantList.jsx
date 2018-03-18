import * as React from 'react'
import * as style from './RestaurantList.scss'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import list from './RestaurantList.json'

@connect(mapStateToProps)
export class RestaurantList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { restaurantId } = this.props

        return (
        <div className={style.restaurantListContainer}>
            <h1>Welcome to {restaurantId}</h1>
            <h2>Here is All Restaurants in {restaurantId}</h2>

            <div className={style.restaurantList}>
                <ul className={style.restaurants}>
                    {_.map(list, restaurants => {
                        return _.map(restaurants, restaurant => {
                            return (
                                <li className={style.restaurant}>
                                <div>
                                    <Link to={`/restaurants/${restaurantId}/${restaurant.id}`}>
                                        <img className={style.restaurantImage} src={restaurant.image} />
                                        <div className={style.restaurantName}><h2>{restaurant.name}</h2></div>
                                    </Link>
                                </div>
                            </li>)
                        })
                    })}
                </ul>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cityName: state.location.cityName
    }
}
