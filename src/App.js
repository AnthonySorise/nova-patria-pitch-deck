import React, { useState, useEffect, useRef } from "react";
import SlideControls from "./components/SlideControls";
import './App.scss';

const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideTotal, setSlideTotal] = useState(0);
    const slidesContainerRef = useRef(null);

    useEffect(() => {
        //find slide total
        const slideTotal = slidesContainerRef.current
            ? slidesContainerRef.current.querySelectorAll('div').length
            : 0;
        setSlideTotal(slideTotal);
    }, []);
    useEffect(() => {
        const slidesContainer = slidesContainerRef.current;
        const slideElements = slidesContainer.querySelectorAll('div');
        const activeSlideElement = slideElements.item(activeSlide);

        if (activeSlideElement) {
            activeSlideElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [activeSlide]);

    const handleButtonClick = (index) => {
        setActiveSlide(index);
    };
    
    return (
        <>
            <div id="SlidesContainer" ref={slidesContainerRef}>
                <div style={{ backgroundColor: "red" }}>Slide 1</div>
                <div style={{ backgroundColor: "blue" }}>Slide 2</div>
                <div style={{ backgroundColor: "green" }}>Slide 3</div>
            </div>
            <SlideControls
                activeSlide={activeSlide}
                slideTotal={slideTotal}
                handleButtonClick={handleButtonClick}
            />
        </>
    );
};

export default App;