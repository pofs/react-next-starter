import React from 'react';
import {withRouter} from 'react-router'

class BaseHeader extends React.Component {

    state = {

    }

    render() {

        return (
            <header className="header"> header </header>
        )
    }
}

export const Header = withRouter(BaseHeader)