import React, { Component } from 'react';
import { withRouter } from 'react-router'

class Thanks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Thank you</p>
                </div>
            
        )
    }

}

export default withRouter(Thanks);
