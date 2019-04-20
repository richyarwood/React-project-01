import React from 'react'
import axios from 'axios'

class WeatherResults extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  // getWeather() {
  //   return this.state.data.weather.map(info => info.description).join(', ')
  // }

  // componentDidMount() {
  //   axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&&units=metric&APPID=d45d5ac55809a97a37f2ee2613045b17', this.state.data)
  //     .then(res => this.setState({data: res.data}))
  // }

  render() {
    // if(!this.state.data.weather) return null
    // else console.log(this.state.data.weather)
    console.log(this.props)

    return(
      <section className="section">
        <h1>{this.props.data}</h1>
      </section>
    )
  }
}

export default WeatherResults
