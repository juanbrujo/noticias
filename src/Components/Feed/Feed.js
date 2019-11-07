import React from 'react'
import https from 'https'
import PropTypes from 'prop-types'
import _get from 'lodash/get'
// import { es } from 'date-fns/locale'
import MySwiper from '../Swipper/Swipper'
// import { format, parse } from 'date-fns'

class Feed extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      items: []
    }
    this.corsProxy = 'https://proxy.serveruwu.com/'
  }

  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
  }

  componentDidMount = async () => {
    const { url } = this.props
    https.get(this.corsProxy + url, res => {
      res.setEncoding('utf8')
      let body = ''
      res.on('data', data => {
        body += data
      })
      res.on('end', () => {
        body = JSON.parse(body)
        this.setState({
          items: body
        })
      })
    })
  }

  renderDate (pubDate) {
    // console.log('TCL: Feed -> renderDate -> pubDate', pubDate)
    // const twitterDate = parse(pubDate, 'EEE, dd MMM yyyy HH:mm:ss [GMT]')
    // console.log('TCL: Feed -> renderDate -> twitterDate', twitterDate)
    return <span className='timetext-small'>{pubDate}</span>
  }

  render () {
    const { items } = this.state
    const { title } = this.props
    const elements = items.map((item, index) => {
      const image = _get(item, 'enclosure', {})
      const imageUrl = _get(image, 'url')
      return <a className='rss-link' key={index} href={item.link} target="_blank" rel="noopener noreferrer">
        {imageUrl && <img src={imageUrl} alt="imagen"/>}
        <span className='text'>{this.renderDate(item.pubDate)}</span><br/>
        <span className='text' style={{ color: '#ffcf77' }}>{item.description}</span>
        <span className='clear' />
      </a>
    })

    return <div className="col-12 col-sm-6 col-md-4 col-lg-4">
      <h5 className='rss-site'>{title}</h5>
      <MySwiper slides={elements} />
    </div>
  }
}

export default Feed
