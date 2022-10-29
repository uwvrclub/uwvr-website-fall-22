import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../styles/EventsSlider.scss'

interface EventsData {
    events?: Array<any>
}

const EventsSlider = (props: EventsData) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = props.events?.length || 0

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    if (!Array.isArray(props.events) || props.events?.length <= 0) return null

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight
                className="right-arrow"
                onClick={nextSlide}
            />
            <div className="slide active">
                <img src={props.events[currentSlide].image} className="image" />
                <h2>{props.events[currentSlide].title}</h2>
                <p>{props.events[currentSlide].content}</p>
            </div>
        </div>
    )
}

export default EventsSlider
