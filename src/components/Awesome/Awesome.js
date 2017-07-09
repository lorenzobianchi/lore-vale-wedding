import React, { PureComponent } from 'react'
import './Awesome.css'

const getRandomColor = () => {
  return '#' + Array.apply(null, { length: 6 })
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')
}

class Awesome extends PureComponent {
  state = {
    colors: [],
  }

  componentDidMount() {
    this.makeAwesomeColors()
    this.intervalId = setInterval(this.makeAwesomeColors, this.props.tick)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  makeAwesomeColors = () => {
    this.setState({
      colors: this.props.word.split('').map(getRandomColor)
    })
  }

  render() {
    const { word } = this.props
    return (
      <div className="Awesome">
        {word.split('').map((letter, i) => (
          <span key={i} style={{ color: this.state.colors[i] }}>
            {letter}{' '}
          </span>
        ))}
      </div>
    )
  }
}

Awesome.defaultProps = {
  word: 'AWESOME',
  tick: 200,
}

export default Awesome
