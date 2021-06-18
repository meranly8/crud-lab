import React, { Component } from 'react'

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }
  
  render() {
    return (
      <div>
        <h2>New Restaurant</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Name:</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RestaurantInput