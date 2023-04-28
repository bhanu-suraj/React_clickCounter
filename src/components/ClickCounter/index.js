import {Component} from 'react'
import './index.css'
class ClickCounter extends Component {
  state = {count: 0}
  increaseCount = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">The Button has been Clicked {count} times</h1>
          <p className="paragraph">Click the button to increase the count!</p>
          <button className="button" onClick={this.increaseCount}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
