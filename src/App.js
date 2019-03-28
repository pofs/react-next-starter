import HomeScreen from "./screens/Home/HomeScreen";
import {Header, Footer} from './components';
import {Route, Switch } from 'react-router-dom';
import React from "react"

export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <Switch>
                        <Route exact path="/" component={HomeScreen}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}
