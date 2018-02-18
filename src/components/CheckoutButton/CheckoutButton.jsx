import React from 'react'
import style from './CheckoutButton.scss'
import { connect } from 'react-redux'

@connect(mapStateToProps)
export class CheckoutButton extends React.Component{
    render(){
        const { totalShoppingItem } = this.props
        return(<div className={style.checkoutButton}>{totalShoppingItem}</div>)
    }
}

function mapStateToProps(state){
    return {
        totalShoppingItem: state.checkout.totalShoppingItem
    }
}

