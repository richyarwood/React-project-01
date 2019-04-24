import React from 'react'
import axios from'axios'

import WeatherResults from './WeatherResults'

class Home extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    const data = ({ ...this.state.data, [e.target.name ]: e.target.value })
    console.log(this.state.data)
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.data.search}&&units=metric&APPID=d45d5ac55809a97a37f2ee2613045b17`, this.state.data)
      .then(res => this.setState({data: res.data}))
  }

  render() {
    console.log(this.state.data)
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <form onSubmit={this.handleSubmit}>
                <div className="control">
                  <input
                    className="input"
                    name="search"
                    placeholder="Search for a city"
                    onChange={this.handleChange}/>
                </div>
                <button className="button is-black">Search</button>
              </form>
              <WeatherResults {...this.state.data} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
