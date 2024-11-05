import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNum = () => {
    let n = Math.round(Math.random() * 100)
    this.setState(each => ({num: n}))
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-conatiner">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.generateNum}>
            Generate
          </button>
          <p className="result">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
