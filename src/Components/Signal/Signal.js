import React from 'react'
import PropTypes from 'prop-types'
import _uniqueId from 'lodash/uniqueId'

class Signal extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    src: PropTypes.string
  }

  render () {
    const { title, src } = this.props
    return <div className="col-6 col-md-4 col-lg-4 contfill">
      <div className="nombre">{title}</div>
      <div className="embed-responsive embed-responsive-16by9 pad-10">
        <iframe
          src={src}
          title={_uniqueId('iframe-')}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
    </div>
  }
}

export default Signal
