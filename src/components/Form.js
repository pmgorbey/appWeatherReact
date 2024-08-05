import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
        <form onSubmit={this.props.getWeather}>
            <input type='text' name='city' placeholder='Town' />
            <button>Get the Weather</button> 
            <button onClick={this.props.getReload}>Reset</button>
        </form>
    )
  }
}

export default Form