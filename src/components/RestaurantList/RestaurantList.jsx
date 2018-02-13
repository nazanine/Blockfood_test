import * as React from 'react'

export class RestaurantList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        const selectedCity = "Grenoble"

        return (
        <div>
            <h1>Welcome to {selectedCity}</h1>
        </div>
        )
    }
}