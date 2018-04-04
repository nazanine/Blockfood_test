import * as React from 'react'
import * as style from './RestaurantList.scss'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import list from './RestaurantList.json'
import { RestaurantType } from '../RestaurantType/RestaurantType.jsx'

const totalRestaurantStart = 5
@connect(mapStateToProps)
export class RestaurantList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { restaurantId } = this.props

        return (
        <div className={style.restaurantListContainer}>

            <RestaurantType />
            <h2>{list.grenoble.length} restaurants in <span className={style.cityTitle}>{restaurantId}</span></h2>

            <div className={style.restaurantList}>
                <div className={style.restaurants}>
                    {_.map(list, restaurants => {
                        return _.map(restaurants, restaurant => {
                            return (
                                <div className={style.restaurant}>
                                    <Link to={`/restaurants/${restaurantId}/${restaurant.id}`}>
                                        <img className={style.restaurantImage} src={restaurant.image} />
                                        <div className={style.restaurantDetail}>
                                            <div className={style.restaurantName}>
                                                <h2>{restaurant.name}</h2>
                                            </div>
                                            <div className={style.restaurantDescription}>
                                                <h2>{restaurant.category}</h2>
                                            </div>
                                            <div className={style.restaurantRate}>
                                                {_.times(restaurant.star, () => <i className={`${style.colored} fas fa-star`}></i>)}
                                                {_.times((totalRestaurantStart - restaurant.star), () => <i className={`${style.white} fas fa-star`}></i>)}
                                            </div>

                                        </div>
                                    </Link>
                            </div>)
                        })
                    })}
                </div>
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
