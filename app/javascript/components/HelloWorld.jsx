import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  click() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return <div>
      <p>こんにちは: {this.props.greeting} / {this.state.count}</p>
      <button onClick={() => this.click()}>数を数える</button>
    </div>
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
