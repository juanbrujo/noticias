import React from 'react'

class Follow extends React.PureComponent {
  componentDidMount = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = '//platform.twitter.com/widgets.js'
    document.body.appendChild(script)
  }

  render () {
    const style = {
      textAlign: 'center',
      paddingTop: '10px'
    }

    return <div style={style}>
      <a href="https://twitter.com/madKoding?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Seguir a @madKoding</a>
      <br/>
      <a href="http://devschile.cl">
        <img src='huemul.jpg' height='30px' alt='devschile' />
      </a>
    </div>
  }
}

export default Follow
