import * as React from 'react'
import * as style from './Progress.scss'

export class Progress extends React.Component {
    render(){
        return(<div className={style.progressContainer}>
            <div className={style.mainTitle}><h1>Delivery progress</h1></div>
            <div className={style.progress}>
                <div className={style.progressBar}>
                    <div className={`${style.colored} ${style.round}`}>
                        <span className={style.progressText}>Command</span>
                    </div>
                    <div className={`${style.colored} ${style.round}`}>
                        <span className={style.progressText}>Progression</span>
                    </div>
                    <div className={`${style.round}`}>
                        <span className={style.progressText}>Delivery</span>
                    </div>
                    <div className={`${style.round}`}>
                        <span className={style.progressText}>Delivered</span>
                    </div>
                </div>
            </div>
        </div>)
    }
}