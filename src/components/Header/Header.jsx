import React from 'react'
import * as style from './Header.scss'
import { withRouter } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(<div className={style.headerContainer}>
            <div className={`${style.leftHeader}`}>
                <div className={style.logo} onClick={this.goHome}>
                    <span>Block</span>Food
                </div>
            </div>
            <div className={style.rightHeader}>
                <button className={style.connection}>Connection</button>
                <div className={style.language}>
                    <select value='EN' >
                        <option value='FR'>FR</option>
                        <option value='EN'>EN</option>
                    </select>
                </div>
            </div>
        </div>)
    }
    goHome = () => {
        const { history } = this.props
        history.push('/')
    }
}
export default withRouter(Header);
