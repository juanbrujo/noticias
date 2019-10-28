import React from 'react'
import PropTypes from 'prop-types'
import Parser from 'rss-parser'
import _get from 'lodash/get'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import MySwiper from '../Swipper/Swipper'

class Feed extends React.PureComponent {
  constructor () {
    super()
    this.parser = new Parser()
    this.state = {
      title: '',
      items: []
    }
    this.corsProxy = 'https://proxy.serveruwu.com/'
  }

  static propTypes = {
    url: PropTypes.string
  }

  componentDidMount = async () => {
    const { url } = this.props
    const feed = await this.parser.parseURL(this.corsProxy + url)
    this.setState({
      site: feed.title,
      items: feed.items
    })
  }

  renderDate (pubDate) {
    return <span className='timetext-small'>{format(new Date(pubDate), 'HH:mm:ss MM/dd/yyyy', { locale: es })}</span>
  }

  render () {
    const { site, items } = this.state
    const elements = items.map((item, index) => {
      const image = _get(item, 'enclosure', {})
      const imageUrl = _get(image, 'url')
      return <a className='rss-link' key={index} href={item.link} target="_blank" rel="noopener noreferrer">
        {imageUrl && <img src={imageUrl} alt="imagen"/>}
        <span className='text'>{this.renderDate(item.pubDate)} - {item.title}</span>
        <span className='clear' />
      </a>
    })

    return <div className="col-12 col-sm-6 col-md-4 col-lg-4">
      <h5 className='rss-site'>{site}</h5>
      <MySwiper slides={elements} />
    </div>
  }
}

export default Feed
