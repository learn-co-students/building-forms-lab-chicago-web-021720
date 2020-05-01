import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Band from '../components/Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return <ul>{this.props.bands.map(band => <Band band={band} />)}</ul>
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: 'ADD_BAND', band: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
