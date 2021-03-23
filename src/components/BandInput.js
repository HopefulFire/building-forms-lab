import React, { Component } from 'react'
import { connect } from "react-redux"

class BandInput extends Component {
  state = {
    name: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: "",
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, (dispatch) => {
  return {
    addBand: (payload) => {
      return dispatch({
        type: "ADD_BAND",
        payload: payload,
      })
    },
  }
})(BandInput)
