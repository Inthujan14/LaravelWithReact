import React, { Component } from 'react'

export class SuccessAlert extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

export default SuccessAlert
