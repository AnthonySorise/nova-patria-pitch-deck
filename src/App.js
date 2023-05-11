import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Container from '@mui/material/Container';
import SlideControls from "./components/SlideControls";
import Slide01BackgroundImage from "./assets/slide01-background.png"
import Slide02BackgroundImage from "./assets/slide02-background.png"
import Slide03BackgroundImage from "./assets/slide03-background.png"
import './App.scss';

const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideTotal, setSlideTotal] = useState(0);
    const slidesContainerRef = useRef(null);

    useEffect(() => {
        //find slide total
        const slideTotal = slidesContainerRef.current
            ? slidesContainerRef.current.querySelectorAll('.slide').length
            : 0;
        setSlideTotal(slideTotal);
    }, []);
    useEffect(() => {
        const slidesContainer = slidesContainerRef.current;
        const slideElements = slidesContainer.querySelectorAll('.slide');
        const activeSlideElement = slideElements.item(activeSlide);

        if (activeSlideElement) {
            activeSlideElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [activeSlide]);

    const StyledContainer = styled(Container)`
        background-color: rgba(0, 0, 0, 0.8);
        padding: 2em;
        height: 100%;
        overflow-y: auto;
        height: 75vh;
        margin-top:4em;
        max-width:90vw;
    `;

    const handleButtonClick = (index) => {
        console.log("BUTTON CLICK: " + index);
        setActiveSlide(index);
    };

    return (
        <>
            <div id="SlidesContainer" ref={slidesContainerRef}>
                <div className="slide" id="slide01" style={{ backgroundImage: `url(${Slide01BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>

                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide02" style={{ backgroundImage: `url(${Slide02BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                            
                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide03" style={{ backgroundImage: `url(${Slide03BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                                
                        </StyledContainer>
                    </div>
                </div>
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