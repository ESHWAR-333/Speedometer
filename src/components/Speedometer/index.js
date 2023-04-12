// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      console.log(prevState.speed)
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return prevState.speed
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      console.log(prevState.speed)
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return prevState.speed
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="mainContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button
            type="button"
            className="button button1 "
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button button2 "
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
