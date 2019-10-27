import React from 'react'

class Clock extends React.Component {
  pad = (str, n) => {
    for (var r = String(str); r.length < n; r = 0 + r);
    return r
  }

  updateClock = () => {
    var now = new Date()
    var sec = now.getSeconds()
    var min = now.getMinutes()
    var hou = now.getHours()
    var mo = now.getMonth()
    var dy = now.getDate()
    var yr = now.getFullYear()
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    var tags = ['mon', 'd', 'y', 'h', 'm', 's']
    var corr = [months[mo], dy, yr, this.pad(hou, 2), this.pad(min, 2), this.pad(sec, 2)]
    for (var i = 0; i < tags.length; i++) { document.getElementById(tags[i]).firstChild.nodeValue = corr[i] }
  }

  componentDidMount () {
    setInterval(this.updateClock, 1000)
  }

  render () {
    return <div className="col-12 col-md-4 col-lg-4 no-gutters">
      <div id="timedate">
        <div className="datetext">
          <span id="mon">&nbsp;</span>
          <span id="d">&nbsp;</span>,
          <span id="y">&nbsp;</span>
        </div>
        <div className="timetext">
          <span id="h">&nbsp;</span> :
          <span id="m">&nbsp;</span> :
          <span id="s">&nbsp;</span>
        </div>
      </div>
    </div>
  }
}

export default Clock
