import React from 'react'

class WeatherResults extends React.Component {

  constructor(props){
    super(props)
  }

  getWeather() {
    return this.props.weather.map(info => info.main).join(', ')
  }

  getIcon() {
    return this.props.weather.map(info => info.icon).join(', ')
  }

  convertTimeFromUnix() {
    const date = new Date(this.props.dt*1000)
    const hours = date.getHours()
    const minutes = '0' + date.getMinutes()
    const seconds = '0' + date.getSeconds()
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime
  }


  render(){
    console.log(this.props)
    if(!this.props.weather) return null
    else console.log(this.props.weather)
    return(
      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title">City</p>
                  <p className="subtitle">{this.props.name}</p>
                </article>
                <article className="tile is-child notification">
                  <p className="title">Time</p>
                  <p className="subtitle">{this.convertTimeFromUnix()}</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">Current Weather</p>
                  <p className="subtitle">{this.getWeather()}</p>
                  <img src={`http://openweathermap.org/img/w/${this.getIcon()}.png`} />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">Temperatures</p>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                    Current temperature: {this.props.main.temp}ºC
                    </div>
                    <div className="level-item">
                    Min. temperature: {this.props.main.temp_min}ºC
                    </div>
                    <div className="level-item">
                    Max. temperature: {this.props.main.temp_max}ºC
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WeatherResults
