import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import VideoShowcase from './components/VideoShowcase'
import SlideControls from "./components/SlideControls";
import SowerInteractiveLogo from "./assets/sower-interactive.png"
import Slide01BackgroundImage from "./assets/slide01-background.png"
import Slide02BackgroundImage from "./assets/slide02-background.png"
import Slide03BackgroundImage from "./assets/slide03-background.png"
import './App.scss';

const App = () => {

    const [slideTotal, setSlideTotal] = useState(0);
    const slidesContainerRef = useRef(null);

    useEffect(() => {
        //find slide total
        const slideTotal = slidesContainerRef.current
            ? slidesContainerRef.current.querySelectorAll('.slide').length
            : 0;
        setSlideTotal(slideTotal);
    }, []);

    const scrollToSlide = (slideIndex) => {
        const slidesContainer = slidesContainerRef.current;
        const slideElements = slidesContainer.querySelectorAll('.slide');
        const activeSlideElement = slideElements.item(slideIndex);

        if (activeSlideElement) {
            activeSlideElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    const StyledContainer = styled(Container)`
        background-color: rgba(0, 0, 0, 0.8);
        padding: 2em;
        height: 100%;
        overflow-y: auto;
        height: 75vh;
        max-width:90vw;
        border-radius:1em;
        position:relative;
        top:4em;
    `;

    return (
        <>
            <div id="SlidesContainer" ref={slidesContainerRef}>
                <div className="slide" id="slide01" style={{ backgroundImage: `url(${Slide01BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h2 style={{ margin: "0.25em 0" }}>
                                        Introducing
                                    </h2>
                                    <h1 style={{ fontSize: "4em", margin: 0 }}>
                                        Nova Patria
                                    </h1>
                                    <p>
                                        Embark on a journey with Nova Patria, a deep economic, transport, and city simulation game set in a alternate reality where a steam-powered Roman Empire never fell but instead ventured into the New World. As a colonial governor at the precipice of an early industrial revolution, plot your path, expand horizons, and meticulously manage your burgeoning cities and resources within a rich, dynamic, isometric, procedurally generated world.
                                    </p>
                                </div>
                                <a href="https://sowerinteractive.com/" target="_blank">
                                    <div style={{ maxWidth: "100px", display: "flex", flexFlow: "column" }}>
                                        <img src={SowerInteractiveLogo} alt="Sower Interactive"
                                            style={{ maxWidth: "80px", margin: "auto" }} />
                                        <h5 style={{ margin: "0.25em 0", textAlign: "center" }}>
                                            Sower<br />Interactive
                                        </h5>
                                    </div>
                                </a>
                            </div>
                            <VideoShowcase />
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
                slideTotal={slideTotal}
                scrollToSlide={scrollToSlide}
            />
        </>
    );
};

export default App;