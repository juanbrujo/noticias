import React from 'react'
import PropTypes from 'prop-types'
import _uniqueId from 'lodash/uniqueId'

class CountDown extends React.PureComponent {
  constructor () {
    super()
    this.divId = _uniqueId('countdown-')
    this.state = {
      timeLeft: '00 : 00 : 00'
    }
  }

  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    finish: PropTypes.string
  }

  componentDidMount = () => {
    setInterval(this.countDownClock, 1000)
  }

  countDownClock = () => {
    const { date, finish } = this.props
    var cnow = new Date().getTime()
    var distance = new Date(date).getTime() - cnow
    if (distance <= 0) {
      this.setState({
        timeLeft: finish
      })
      return false
    }
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    this.setState({
      timeLeft: days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
    })
  }

  render () {
    const { title } = this.props
    const { timeLeft } = this.state
    return <div className="col-12 col-md-4 col-lg-4">
      <div id="countdown">
        <div className="datetext">{title}</div>
        <div id={this.divId} className="timetext red">{timeLeft}</div>
      </div>
    </div>
  }
}

export default CountDown
