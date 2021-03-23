import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"

class BandsContainer extends Component {
  render() {
    
    return(
      <div>
        <BandInput />
        <Bands />
      </div>
    )
  }
}

export default connect()(BandsContainer)
