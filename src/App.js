import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import VideoShowcase from './components/VideoShowcase'
import SlideControls from './components/SlideControls';
import FeatureCard from './components/FeatureCard'
import SowerInteractiveLogo from './assets/sower-interactive.png'
import Slide01BackgroundImage from './assets/slide01-background.png'
import Slide02BackgroundImage from './assets/slide02-background.png'
import Slide03BackgroundImage from './assets/slide03-background.png'
import Slide04BackgroundImage from './assets/slide04-background.png'
import SupplyDemandImage from './assets/supply-demand-example.png'
import AqueductImage from './assets/aqueduct-example.png'
import CitiesImage from './assets/cities-example.png'
import EcnomyImage from './assets/economy-example.png'

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
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
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

                            <h1 style={{ margin: "0.5em 0" }}>
                                Features
                            </h1>

                            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"2em"}}>
                                <FeatureCard
                                    title="Proceduraly Generated Isometric World"
                                    image={Slide01BackgroundImage}
                                    description="Every game is unique. Nova Patria's procedurally generated environment creates diverse landscapes— oceans, rivers, hills, mountains, forests, and drylands. Each plays a crucial role, shaping gameplay and adding a layer of strategic depth to your city and resource management challenges."
                                />
                                <FeatureCard
                                    title="Aqueducts and Water Networks"
                                    image={AqueductImage}
                                    description="In Nova Patria, water is the lifeblood of your cities, and aqueducts are the arteries that carry it. Aqueducts must start at the highest elevation of a spring tile and can be extended up to a certain distance, enabling you to bring water to areas previously unsuitable for city expansion. Building fountains at the end of aqueducts further increases the water's reach, allowing you to construct buildings and grow your city. This crucial feature can be used strategically to either establish new cities in resource-rich areas or expand existing ones, enhancing your city's production capabilities and growth potential."
                                    devlogLinks={["https://youtu.be/-ja3vau5O-Q?t=144"]}
                                />
                                <FeatureCard
                                    title="Dynamic City Building & Growth"
                                    image={CitiesImage}
                                    description="Each decision shapes the destiny of your cities. Your urban landscapes grow with your population, and every house built opens the door for additional structures, amplifying your city's capabilities. But growth is a challenge; to expand your city and build new ones, you must meet the resource demands of your citizens. This is city building where strategy, resource management, and population needs intertwine for a truly dynamic simulation."
                                    devlogLinks={["https://youtu.be/LNed-h2ZFLs?t=31", "https://youtu.be/SDbVcYqRtuo?t=67"]}
                                />
                                <FeatureCard
                                    title="Intricate Simulated Economy"
                                    image={EcnomyImage}
                                    description="Nova Patria is built upon an intricate economic simulation, where numerous supply chains underpin the prosperity of your colony. From the goods consumed by your citizens to the resources that construct your buildings and infrastructure, every item produced plays a crucial role. Success in Nova Patria requires a delicate balancing act, accurately gauging the needs of your colony and adjusting production and distribution accordingly to ensure a harmonious and efficient system."
                                    devlogLinks={["https://youtu.be/YEBm7VCgLLE?t=65"]}
                                />
                                <FeatureCard
                                    title="Real-Time Supply, Demand, and Pricing"
                                    image={SupplyDemandImage}
                                    description="Nova Patria features a dynamic supply-demand system where resource prices fluctuate based on your city's production, consumption, and logistics. Prices respond to factors such as consumption levels, production levels, roads, and the ease of transport across the game's terrain. Strategic decisions can open profitable trade routes and provide cheaper resources for your industries. "
                                    devlogLinks={["https://youtu.be/nE2rpJ-T3hE?t=55"]}
                                />
                                <FeatureCard
                                    title="Transportation Networks"
                                    description="To do"
                                />
                                <FeatureCard
                                    title="Diplomacy and Research"
                                    description="To do"
                                />
                                <FeatureCard
                                    title="Meta Game Progression"
                                    description="To do"
                                />
                            </div>



                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide03" style={{ backgroundImage: `url(${Slide03BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>

                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide03" style={{ backgroundImage: `url(${Slide04BackgroundImage})` }}>
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