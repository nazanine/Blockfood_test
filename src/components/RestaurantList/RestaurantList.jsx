import * as React from 'react'
import { connect } from 'react-redux'

@connect(mapStateToProps)
export class RestaurantList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        const { cityName } = this.props

        return (
        <div>
            <h1>Welcome to {cityName}</h1>
            <h2>Hergit e is All Restaurants in {cityName}</h2>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cityName: state.location.cityName
    }
}
