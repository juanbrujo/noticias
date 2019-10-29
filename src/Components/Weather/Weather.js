import React from 'react'
import https from 'https'
import _get from 'lodash/get'
import _size from 'lodash/size'

class Weather extends React.PureComponent {
  constructor () {
    super()
    this.corsProxy = 'https://proxy.serveruwu.com/'
    this.apiKey = '254a16311601d133906371f355f0d027'
    this.city = 'Santiago,cl'
    this.language = 'es'
    this.unit = 'metric'
    this.state = {
      weatherData: {}
    }
  }

  componentDidMount = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=${this.language}&units=${this.unit}&APPID=${this.apiKey}`
    https.get(url, res => {
      res.setEncoding('utf8')
      let body = ''
      res.on('data', data => {
        body += data
      })
      res.on('end', () => {
        body = JSON.parse(body)
        this.setState({ weatherData: body })
      })
    })
  }

  render () {
    const style = {
      textAlign: 'center',
      paddingTop: '10px',
      color: 'white',
      lineHeight: '0px'
    }
    const { weatherData } = this.state
    if (!_size(weatherData)) return null
    const icon = `http://openweathermap.org/img/w/${_get(weatherData, 'weather[0].icon')}.png`
    return <div style={style}>
      <img src={icon} style={{ }} alt='clima' />
      <p>Clima actual: <span className='timetext-small'>{Math.round(_get(weatherData, 'main.temp'))}ºc</span></p>
      <p><small>
          Max: <span className='timetext-small'><small>{Math.round(_get(weatherData, 'main.temp_max'))}ºc</small></span> /
          Min: <span className='timetext-small'><small>{Math.round(_get(weatherData, 'main.temp_min'))}ºc</small></span>
      </small></p>
    </div>
  }
}

export default Weather
