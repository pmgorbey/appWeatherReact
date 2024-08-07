import React, { Component } from 'react'
// Weather Component
export class Weather extends Component {
  render() {
    return (
      <div className='infoWeath'>
        { this.props.city && 
          <div>
            <p>Location: {this.props.city}, {this.props.country}</p>
            <p>Temperature: {this.props.temp}</p>
            <p>Pressure: {this.props.pressure}</p>
            <p>Wind (speed): {this.props.wind}</p>
            <p>Sunset: {this.props.sunset}</p>
          </div>
        }

        <p className='error'>{ this.props.error }</p>

      </div>
    )
  }
}

export default Weather