import arrow_right from '../assets/arrow_right.png'
import arrow_left from '../assets/arrow_left.png'
import { useState } from 'react'

// Composant Slider(carrousel)

function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    /**Si première image -> dernière image
     * Si autre image -> image en court -1 */
    const prevImg = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    /** Si dernière image -> première image
     * Si autre image -> image en cours +1 */
    const nextImg = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // Si une seule image
    if (slides.length === 1) {
        return (
            <div className='container__slider'>
                {slides[currentIndex]}
            </div>
        )

    } else {
        return (
            <div className='container__slider'>
                {slides[currentIndex]}
                <span className="leftArrowStyles" onClick={prevImg} > <img src={arrow_left} alt='flèche' /> </span>
                <span className='rightArrowStyles' onClick={nextImg} > <img src={arrow_right} alt='flèche' /> </span>
                <div className='slider__counter'>
                    <p>{currentIndex + 1}/{slides.length}</p>
                </div>
            </div>
        )
    }
}

export default Slider

