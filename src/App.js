import React, { Component } from 'react'
import Info from './components/Info'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '69ac6c82e29ab5538ca7a4e3fcb6973a';

export class App extends Component {
  state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      wind: undefined,
      sunset: undefined,
      error: undefined
  }
  
  gettingWeather = async (event) => {
      try {
        event.preventDefault();
    
        const city = event.target.elements.city.value;
        // If city don`t write, nothing to do 
        if (city) {  
          const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
          const data = await api_url.json();
          // console.log(data.message);
       
          // Convertation Data
          let sunset = data.sys.sunset;
          let date = new Date();
          date.setTime(sunset);
          let sunsetDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

          this.setState({
              temp: data.main.temp,
              city: data.name,
              country: data.sys.country,
              pressure: data.main.pressure,
              wind: data.wind.speed,
              sunset: sunsetDate,
              error: undefined
          });
        } else {
          this.setState({
              temp: undefined,
              city: undefined,
              country: undefined,
              pressure: undefined,
              wind: undefined,
              sunset: undefined,
              error: 'Enter the City name ... '
          });
        }
      } catch(err) {
          this.setState({
            error: 'Incorrect the City name ... '
          });
      }
  }

  refreshPage = async () => {
      window.location.reload();  
  }

  render() {
    return (
        <div className='wrapper'>
            <div className='main'>
              <div className='container'>
                <div className='row'>
                    <div className='col-sm-5 info'>
                      <Info />
                    </div>
                    <div className='col-sm-7 form'>
                      <Form 
                          getWeather = {this.gettingWeather} 
                          getReload = {this.refreshPage}
                      />
                      <Weather 
                          temp={this.state.temp}
                          city={this.state.city}
                          country={this.state.country}
                          pressure={this.state.pressure}
                          wind={this.state.wind}
                          sunset={this.state.sunset}
                          error={this.state.error}
                      />
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default App
