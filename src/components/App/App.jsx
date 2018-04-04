import * as React from 'react'
import { Redirect, Route } from 'react-router';
import styles from './App.scss';
import { RestaurantList } from '../RestaurantList/RestaurantList.jsx'
import { Localisation } from '../Localisation/Localisation.jsx'
import { Restaurant } from '../Restaurant/Restaurant.jsx'
import Header from '../Header/Header.jsx'
import { Progress } from '../Progress/Progress.jsx'

export class App extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <div>
                    <Header/>
                </div>
                <div>
                    <Route exact path='/' render={() => (
                        <Redirect to='/localisation'/>
                    )}/>
                    <Route exact path='/localisation' render={() => <Localisation />} />
                    <Route exact path='/restaurantList/:restaurantId' render={(props) => (
                        <RestaurantList restaurantId={props.match.params.restaurantId} />
                    )} />
                    <Route path='/restaurants/:cityId/:restaurantId' render={(props) => (
                        <Restaurant
                            cityId={props.match.params.cityId}
                            restaurantId={props.match.params.restaurantId} />
                    )} />
                    <Route path='/progress' render={() => <Progress/> } />
                </div>
            </div>
        )
    }
}


