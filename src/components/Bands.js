import React from 'react';
import { connect } from "react-redux"

const Bands = (props) => {
  const bands = props.bands.map((band) => {
      return <li key={band.name}>{band.name}</li>
  })
  return (
    <div>
      <ul>
        {bands}
      </ul>
    </div>
  )
}

export default connect((store) => {
  return {
    bands: store.bands,
  }
})(Bands);