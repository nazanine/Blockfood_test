import * as React from 'react'
import {bindActionCreators} from 'redux'
import styles from './Localisation.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as LocationActions from '../../redux/Localisation/locationActions';



@connect(mapStateToProps, mapDispatchToProps)
export class Localisation extends React.Component{

    constructor(props) {
        super(props)
            this.state = {}
    }

    render(){
        const { cityName, locationActions} = this.props

        return <div className={styles.localisationContainer}>
            <h1>Vos restaurants préférés, livrés en moins de 30 minutes.</h1>
            <div>
                <input value={cityName} type='text'
                       onChange={ event => {locationActions.setCityName(event.target.value)} }
                       placeholder='loading...'
                />
            </div>
            <Link to='/restaurantList' ><button>Search...</button></Link>
        </div>
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
