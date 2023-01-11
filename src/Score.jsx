import React, { Component } from 'react'

export default class Score extends Component{
    render() {
        
        return(
            <>
            <h3>{this.props.student.name}</h3>
                <p>{this.props.student.bio}</p>
            
            </>
        )
    }
}