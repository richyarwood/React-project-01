import React from 'react'
import axios from 'axios'

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
    this.props.history.push('/weather')
  }

  render() {

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

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
