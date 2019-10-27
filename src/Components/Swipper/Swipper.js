import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Swiper, Slide } from 'react-dynamic-swiper'
import 'react-dynamic-swiper/lib/styles.css'

class MySwiper extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      slides: []
    }
  }

  static propTypes = {
    slides: PropTypes.array
  }

  // componentWillMount () {
  //   const { slides } = this.props
  //   this.setState({ slides })
  // }

  render () {
    const { slides } = this.props
    console.log('TCL: MySwiper -> render -> slides', slides)
    return (
      <Swiper
        swiperOptions={{
          effect: 'cube',
          slidesPerView: 'auto',
          autoplay: {
            delay: 5000
          }
        }}
        // nextButton={<MyNextButton />}
        // prevButton={swiper => (
        //   <MyPrevButton onClick={() => swiper.slideNext()} />
        // )}
        // onTouchMove={(swiper, event) => doSomething()}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            {slide}
          </Slide>
        ))}
      </Swiper>
    )
  }
}

export default MySwiper
