import React from "react"
import '../assets/stylesheets/components/loader.scss'

export default class Loader extends React.Component {

    state = {}

    render() {
        return (
            <div className="loader">
                <div className="loader__btn"/>
            </div>
        )
    }
}