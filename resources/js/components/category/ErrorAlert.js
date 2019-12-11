import React, { Component } from 'react'

export class ErrorAlert extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div>
                <div class="alert alert-danger" role="alert">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default ErrorAlert
