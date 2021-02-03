import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import './Sliders.css'



function Sliders() {
    return (

        <div className="sliders">
        <h1>Idea Themes</h1>
        <Carousel className="sliderbox">
        <Carousel.Item>
          <img
            className="d-block Slideimg"
            src={process.env.PUBLIC_URL + "/images/alex-knight-2EJCSULRwC8-unsplash.jpg"}
            alt="First slide"
            id="slideimg1"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block Slideimg"
            src={process.env.PUBLIC_URL + "/images/wesson-wang-y0_vFxOHayg-unsplash.jpg"}
            alt="Third slide"
            id="slideimg2"
            
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block Slideimg"
            src={process.env.PUBLIC_URL + "/images/light-bulb-ideas-creative-diagram-concept.jpg"}
            alt="Third slide"
            id="slideimg3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block Slideimg"
            src={process.env.PUBLIC_URL + "/images/eddie-kopp-ZkRVjJivs9Q-unsplash (1).jpg"}
            alt="Third slide"
            id="slideimg3"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Sliders
