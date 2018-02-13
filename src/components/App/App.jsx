import * as React from 'react'
import { Redirect, Route } from 'react-router';
import styles from './App.scss';

export class App extends React.Component{
    render(){
        return (
            <div className={styles.container}>
                    Hello from Blockfood :)
            </div>
        )
    }
}
