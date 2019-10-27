import React from 'react'
import Signal from '../Signal/Signal'
import Clock from '../Clock/Clock'
import Follow from '../Follow/Follow'
import CountDown from '../CountDown/CountDown'
import { Helmet } from 'react-helmet'

class App extends React.Component {
  constructor () {
    super()
    this.signals = [{
      title: 'CAMARA PLAZA ITALIA - Galeria CIMA',
      src: 'https://www.youtube.com/embed/DMaSEx506p0?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: '24 Horas TVN',
      src: 'https://www.youtube.com/embed/g4599q5uxnM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'T13',
      src: 'https://www.youtube.com/embed/6554DE4Cp_w?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'Meganoticias',
      src: 'https://www.youtube.com/embed/mvjj_ZEw384?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'CHV',
      src: 'https://mdstrm.com/live-stream/5c6c302a414cc5496c9d7d79?jsapi=true&autoplay=true&volume=0'
    }, {
      title: 'CNN Chile',
      src: 'https://www.youtube.com/embed/y5vvZ5gbF10?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }]
  }

  render () {
    return (
      <div className="container-fluid h-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Informativo Chileno</title>
          <meta name="description" content="Informate de todas las señales de tv nacionales y de las noticias minuto a minuto" />
          <link rel="canonical" href="http://madkoding.com/tv" />
        </Helmet>
        <div className="row h-100">
          <Clock />
          <Follow />
          <CountDown title={'Marcha Martes 29'} date={'Oct 29, 2019 17:30:00'} finish={'00 : 00 : 00'} />
          {this.signals.map((signal, index) => <Signal key={index} title={signal.title} src={signal.src} />)}
        </div>
      </div>
    )
  }
}

export default App
