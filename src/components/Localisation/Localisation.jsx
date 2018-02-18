import * as React from 'react'
import {bindActionCreators} from 'redux'
import styles from './Localisation.scss'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import * as LocationActions from '../../redux/Localisation/locationActions';



@connect(mapStateToProps, mapDispatchToProps)
export class Localisation extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            savedCityName : ''
        }
    }

    render(){
        const { cityName } = this.props
        const { savedCityName } = this.state

        return<div className={styles.localisationContainer}>
        <div className={styles.localisation}>
            <h1>Vos restaurants préférés, livrés en moins de 30 minutes.</h1>
            <div className={styles.search}>
                <input className={styles.input} value={cityName} type='text'
                       onKeyDown={this.handleKeyDown}
                       onChange={this.handleAction}
                       placeholder='loading...'
                />
                <Link to={`/restaurantList/${savedCityName}`} ><button className={styles.searchButton}></button></Link>
            </div>
        </div>
        </div>
    }
    handleAction = (event) => {
        const { locationActions} = this.props
        locationActions.setCityName(event.target.value)
        this.setState({savedCityName: event.target.value})
    }
    handleKeyDown = (event) => {
        if(event.keyCode === 13 ){
            this.handleAction(event)
            return <Redirect push to={`/restaurantList/${event.target.value}`} />
        }
    }
}
function mapStateToProps(state){
    return {
        cityName: state.cityName
    }
}
function mapDispatchToProps( dispatch ) {
    return {
        locationActions : bindActionCreators(LocationActions, dispatch)
    }
}
