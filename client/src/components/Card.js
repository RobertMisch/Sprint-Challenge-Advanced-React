import React from 'react';
import App from '../App'

class Card extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
            <div>
                <p data-testid={this.props.data.id}>id: {this.props.data.id}</p>
                <p data-testid={this.props.data.name}>name: {this.props.data.name}</p>
                <p>country: {this.props.data.country}</p>
                <p>searches: {this.props.data.searches}</p>
            </div>
        )
    }
}

export default Card