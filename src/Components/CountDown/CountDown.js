import React from 'react'
import PropTypes from 'prop-types'
import _uniqueId from 'lodash/uniqueId'
import { utcToZonedTime } from 'date-fns-tz'
import { getTime } from 'date-fns'

class CountDown extends React.PureComponent {
  constructor () {
    super()
    this.divId = _uniqueId('countdown-')
    this.state = {
      timeLeft: '0:00:00:00'
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

  pad = (str, n) => {
    for (var r = String(str); r.length < n; r = 0 + r);
    return r
  }

  countDownClock = () => {
    const { date, finish } = this.props
    const timeZone = 'America/Santiago'

    const finishDate = new Date(date).toISOString()
    const nowDate = new Date().toISOString()
    const cnow = getTime(utcToZonedTime(nowDate, timeZone))
    const cfinish = getTime(utcToZonedTime(finishDate, timeZone))

    var distance = cfinish - cnow + 1000
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
      timeLeft: days + ':' + this.pad(hours, 2) + ':' + this.pad(minutes, 2) + ':' + this.pad(seconds, 2)
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
