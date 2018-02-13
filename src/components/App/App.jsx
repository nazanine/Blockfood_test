import * as React from 'react'
import { Redirect, Route } from 'react-router';
import styles from './App.scss';
import { RestaurantList } from '../RestaurantList/RestaurantList.jsx'
import { Localisation } from '../Localisation/Localisation.jsx'

export class App extends React.Component{
    render(){
        return (
            <div className={styles.container}>
                <div>
                </div>
                <div>
                    <Route exact path='/' render={() => (
                        <Redirect to='/localisation'/>
                    )}/>
                    <Route exact path='/localisation' component={() => <Localisation/>} />
                    <Route exact path='/restaurantList' component={() => <RestaurantList/>} />
                </div>
            </div>
        )
    }
}
