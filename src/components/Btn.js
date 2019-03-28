import React from "react"

export default class Btn extends React.Component {

    state = {}

    render() {
        return (
            <button type={this.props.type}
                    onClick={this.props.onClick}
                    className={`btn btn--${this.props.modifier}`}
            >
                {this.props.children}
            </button>
        )
    }
}