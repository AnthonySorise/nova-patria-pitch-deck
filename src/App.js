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
import RoadsImage from './assets/roads-example.png'
import TimelinePastImage from './assets/timeline-past.png'
import TimelineFutureImage from './assets/timeline-future.png'
import AnthonyImage from './assets/anthony.png'

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
        const innerContent = activeSlideElement?.firstElementChild?.firstElementChild;

        if (activeSlideElement && innerContent) {
            innerContent.scrollTop = 0;
            activeSlideElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const StyledContainer = styled(Container)`
        background-color: rgba(0, 0, 0, 0.8);
        padding: 1em;
        overflow-y: auto;
        height: 75vh;
        min-height: 85vh;
        max-width:90vw;
        border-radius:1em;
        position:relative;
        top:1.5em;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px) {
            min-height: unset;
        }
    `;

    return (
        <>
            <div id="SlidesContainer" ref={slidesContainerRef}>
                <div className="slide" id="slide01" style={{ backgroundImage: `url(${Slide01BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h2 style={{ margin: "0 0 0.25em 0" }}>
                                        Introducing
                                    </h2>
                                    <h1 style={{ fontSize: "3.75em", margin: 0 }}>
                                        Nova Patria
                                    </h1>
                                </div>
                                <a href="https://sowerinteractive.com/" target="_blank" rel="noreferrer">
                                    <div style={{ maxWidth: "100px", display: "flex", flexFlow: "column" }}>
                                        <img src={SowerInteractiveLogo} alt="Sower Interactive"
                                            style={{ maxWidth: "80px", margin: "auto" }} />
                                        <h5 style={{ margin: "0.25em 0", textAlign: "center" }}>
                                            Sower<br />Interactive
                                        </h5>
                                    </div>
                                </a>
                            </div>
                            <div style={{ margin: "1em" }}>
                                <FeatureCard
                                    description={'Drive the gears of progress and innovation in Nova Patria, a simulation strategy game set in an alternate history where a steam-powered Roman Empire never fell but instead ventured into the New World. As a colonial governor at the precipice of an early industrial revolution, plot your path, expand horizons, and manage your burgeoning cities and resources within a dynamic, isometric, procedurally generated world.'}
                                    isFullWidth={true}
                                    isBold={true}
                                />
                            </div>
                            <VideoShowcase />
                            <h1 style={{ margin: "0.5em 0" }}>
                                The Mission
                            </h1>

                            <FeatureCard
                                description={['Nova Patria revisits the essence of \'90s and early 2000s simulation and strategy games, infusing them with fresh, innovative ideas. More than an homage to great classic PC games, it\'s about reinterpreting what made those titles memorable, integrating a fusion of diverse mechanics to create a gameplay experience that feels both familiar and excitingly new. In Nova Patria, the strategy of nation-building seen in Sid Meier\'s Colonization, the meticulous city planning of SimCity, and the nuanced economic challenges of the Anno series are not just sources of inspiration but foundations for innovation. Leveraging modern hardware capabilities, Nova Patria enriches these classic elements with fresh perspectives and mechanics. Players are invited to construct an intricately simulated world that\'s engaging to manage and mesmerizing to watch unfold, guiding a colony’s growth from a simple village into a vast thriving state.']}
                                isFullWidth={true}
                            />
                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide02" style={{ backgroundImage: `url(${Slide02BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>

                            <h1 style={{ margin: "0 0 0.5em 0" }}>
                                Features
                            </h1>

                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2em" }}>

                                <FeatureCard
                                    title="Procedural Isometric World"
                                    image={Slide01BackgroundImage}
                                    description="Every game is unique. Nova Patria's procedurally generated environment creates diverse landscapes— oceans, rivers, springs, hills, mountains, forests, and drylands. Each plays a crucial role, shaping gameplay and adding a layer of strategic depth to your city and resource management challenges."
                                />
                                <FeatureCard
                                    title="Dynamic City Building & Growth"
                                    image={CitiesImage}
                                    description="Each decision shapes the destiny of your cities. Your urban landscapes grow with your population, and every house built opens the door for additional structures, amplifying your city's capabilities. But growth brings more challenge; to expand your city and build more within it, you must meet the resource demands of your growing population."
                                    buttonNames={["Devlog Example 1", "Devlog Example 2"]}
                                    buttonLinks={["https://youtu.be/LNed-h2ZFLs?t=31", "https://youtu.be/SDbVcYqRtuo?t=67"]}
                                />
                                <FeatureCard
                                    title="Intricate Simulated Economy"
                                    image={EcnomyImage}
                                    description="Nova Patria is built upon an intricate economic simulation, where numerous supply chains underpin the prosperity of your colony. From the goods consumed by your citizens to the resources that construct your buildings and infrastructure, every item produced plays a crucial role. Success in Nova Patria requires a delicate balancing act, accurately gauging the needs of your colony and adjusting production and distribution accordingly to ensure a harmonious and efficient system."
                                    buttonNames={["Devlog Example"]}
                                    buttonLinks={["https://youtu.be/YEBm7VCgLLE?t=65"]}
                                />
                                {/* <FeatureCard
                                    title="Real-Time Supply, Demand, and Pricing"
                                    image={SupplyDemandImage}
                                    description="Nova Patria features a dynamic supply-demand system where resource prices fluctuate geographically based on consumption levels, production levels, and the ease of transport across the game's terrain and constructed roads. Finding and capitalizing on profit opportunities within these dynamic prices becomes crucial, as they hold the key to acquiring the essential means for the growth and prosperity of your colony."
                                    buttonNames={["Devlog Example"]}
                                    buttonLinks={["https://youtu.be/nE2rpJ-T3hE?t=55"]}
                                /> */}
                                <FeatureCard
                                    title="Aqueducts and Water Networks"
                                    image={AqueductImage}
                                    description="In Nova Patria, water is the lifeblood of your cities. Rivers and aqueducts are the arteries that carry it. Aqueducts must start at the highest elevation of a spring tile and can be extended up to a certain distance, enabling you to bring water to areas previously unsuitable for city expansion. Building fountains at the end of aqueducts further increases the water's reach, allowing you to construct buildings and grow your city. Expand water networks strategically to either establish new cities in resource-rich areas or expand existing cities to create sprawling economic powerhouses."
                                    buttonNames={["Devlog Example"]}
                                    buttonLinks={["https://youtu.be/-ja3vau5O-Q?t=144"]}
                                />
                                <FeatureCard
                                    title="Transportation Networks and Trade"
                                    image={RoadsImage}
                                    description="Nova Patria's transportation system takes a novel approach - roads wind and interconnect via vertices of tiles, instead of simply occupying them entirely. This design allows for a more fluid, natural pathing system, and a greater sense of scale between tiles in the game world. It also facilitates diagonal travel, bypassing the awkward zigzags of conventional grid-based movement. Public roads expedite the movement of goods, boosting economic productivity. Nearby resources autonomously navigate to their points of demand, while farther ones rely on your strategic transportation network. As governor, commission an array of transport vehicles - from rudimentary carts to advanced trains, and eventually, airships - to optimize your colony's growth."
                                />
                                <FeatureCard
                                    title="Diplomacy and Research"
                                    description="As players journey through Nova Patria's Tech Tree, set against the backdrop of an early industrial revolution, they'll witness a dynamic evolution of gameplay, where technology advances at a breakneck speed, continually reshaping their strategic possibilities. Each technological breakthrough not only unlocks new structures and upgrades but also fundamentally alters how the simulation operates. From expanding infrastructure capabilities to revolutionizing resource management, progress in the Tech Tree transforms the very fabric of your empire's development, offering a living, evolving strategy experience. In the realm of diplomacy, wield your Influence with the Emperor skillfully. Earn it through carefully wagering strategic pledges and use it to sway Empire policies that influence your colony. Each policy and pledge decision shapes your standing and alters your empire's trajectory."
                                />
                                <FeatureCard
                                    title="Personalized Missions and Perks"
                                    description="From the onset, players handpick three unique goals, turning every playthrough into a personalized unique mission. Triumph isn't just its own reward - achieve your targets and unlock perks that shape future expeditions. With the ability to employ up to three perks each game, the strategic possibilities multiply, ensuring no two games are the same. This continuous cycle of setting goals, earning perks, and discovering synergistic combinations infuses Nova Patria with enduring replayability. Each new game brings a fresh start, offering novel challenges and prospects in this parallel history. Forge your path, craft your narrative, and make Nova Patria truly your own."
                                />
                            </div>



                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide03" style={{ backgroundImage: `url(${Slide03BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                            <h1 style={{ margin: "0 0 0.5em 0" }}>
                                Community & Marketing
                            </h1>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2em" }}>
                                <FeatureCard
                                    title="A Standout in GamerZakh's Anticipated City-Building Games"
                                    description="Nova Patria's recognition in GamerZakh's 'The Most Anticipated City-Building Games in 2023 & 2024' video not only attests to the game's distinctive appeal but also indicates the effectiveness of its outreach strategies. The prominent gaming channel, which boasts over 189,000 subscribers, has brought the game into the spotlight in this video from September 2022, amassing over 290,000 views. Despite the existence of a collective segment for smaller indie games in the video, Nova Patria's unique allure merited an individual highlight. This placement is a testament to the game's potential to carve out its own space in the competitive gaming landscape, and an indicator of the growing anticipation in the marketplace for this type of game."
                                />

                                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                                    <iframe
                                        style={{ maxWidth: "100%" }}
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/D-MXFPeLjts?start=1372&amp;modestbranding=1&amp;rel=0"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>

                                <FeatureCard
                                    title="The Nova Patria Devlog Series"
                                    description="Initiated in June 2022, six months into the game's development, the Nova Patria devlog series has steadily charted the course of the game's evolution. With six comprehensive videos, it has attracted a dedicated audience of over 130 subscribers, and garnered more than 3,000 views. This peek into the developmental journey of Nova Patria showcases progress, highlights milestones, and shares the behind-the-scenes labor of love that goes into creating an engaging game. The devlog series not only cultivates a bond with the burgeoning community but also stands as a testament to the game's continual and consistent progress."
                                />

                                <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                                    <iframe
                                        style={{ maxWidth: "100%" }}
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/?listType=playlist&amp;list=PLyezjG2qP1t3x91OZVOwd1AMgIc1WvdVO&amp;modestbranding=1&amp;rel=0&amp;index=8"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>

                                <FeatureCard
                                    title="Nova Patria's Growing Online Presence"
                                    description={['Nova Patria\'s social media campaign is steadily gaining traction. With over 50 active members on Discord and the same number of subscribers on the mailing list, it\'s clear that a tight-knit community of dedicated fans is forming. These enthusiasts are not just passive observers but active contributors, keenly participating in discussions and excited to aid in the game\'s beta testing process.',
                                        'The enthusiasm spills over to Reddit, where Nova Patria has generated a strong presence. Posts showcasing the game have amassed over 1500 upvotes, reflecting positive reception and genuine interest from the wider gaming community.',]}
                                    buttonNames={[ 'Reddit', 'Discord']}
                                    buttonLinks={['https://www.reddit.com/user/SowerInteractive/?sort=top&t=all', 'https://discord.gg/jPsPvhMSYv']}
                                    isFullWidth={true}
                                />
                            </div>


                        </StyledContainer>
                    </div>
                </div>
                <div className="slide" id="slide03" style={{ backgroundImage: `url(${Slide04BackgroundImage})` }}>
                    <div className="slide-content">
                        <StyledContainer>
                            <h1 style={{ margin: "0 0 0.5em 0" }}>
                                Development
                            </h1>

                            <FeatureCard
                                description={'The development of Nova Patria has been solely undertaken by developer Anthony Sorise under the newly formed Sower Interactive LLC. Initiated in December 2021, the project is expected to reach completion in Q4 2024. Thus far development has been a balance of part-time and full-time dedication. Approximately half of the development period involved a part-time commitment of about 20 hours per week, while the other half saw a full-time commitment of 40 to 56 hours per week. Presently, the project is reaching the beta stage, and steadily progressing towards the final product.'}
                            />

                            {/* <h2 style={{ margin: "1em 0 0.5em 0" }}>
                                Completed Milestones
                            </h2>
                            <img style={{ width: "100%" }} alt="timeline - past milestones" src={TimelinePastImage} />
                            <h2 style={{ margin: "1em 0 0.5em 0" }}>
                                Planned Milestones
                            </h2>
                            <img style={{ width: "100%" }} alt="timeline - future milestones" src={TimelineFutureImage} /> */}

                            <h2 style={{ margin: "1em 0 0.5em 0" }}>
                                About the Developer
                            </h2>
                            <FeatureCard
                                sideImage={AnthonyImage}
                                description={[
                                    "With a creative spirit ingrained within him, Anthony Sorise possesses a diverse range of experiences that uniquely qualify him to bring Nova Patria to life.",
                                    "With a background spanning over 10 years in audio production for AAA titles, including Call of Duty: Black Ops II, XCOM 2, and Civilization VI, Anthony developed a fascination for programming. This passion led him to embark on a journey starting in 2012 to master C# and Unity.",
                                    "Following an intensive web development program in 2017, Anthony worked at various tech companies.  Here, he honed his skills in UI, user experience, and data visualization; integral components now embedded into the fabric of Nova Patria's development.",
                                    "As an avid enthusiast of strategy games, Anthony has dedicated countless hours exploring the genre, delving deeply into the nuances of game design. Today, he balances his diverse background to craft Nova Patria into a game that resonates with fellow enthusiasts. Each design decision and meticulous refinement reflects his commitment to creating a game he, as a gamer, would love to play."]}
                                buttonNames={["Portfolio", "Email"]}
                                buttonLinks={["https://anthonysorise.com/", "mailto:anthony.sorise@sowerinteractive.com"]}
                            />

                            <h2 style={{ margin: "1em 0 0.5em 0" }}>
                                Development Needs
                            </h2>
                            <FeatureCard
                                html={'<span>To fully realize the vision of Nova Patria, a robust partnership is sought that can provide:</span><ul style="margin-bottom:0"><li><b>Development Funding: </b> Financial backing for the remaining year of development is crucial. This support will guarantee undivided focus and commitment to the project, allowing a consistent 40 to 56 hours per week to be dedicated to the game. Consequently, this accelerates the development process and ensures the highest quality output.<br /><br /></li><li><b>Art and Music Commissioning: </b> The art assets currently in use serve as placeholders. To elevate the game\'s aesthetic and auditory experience, it is necessary to commission unique art and music assets from professional third parties.<br /><br /></li><li><b>Collaborative Input: </b> Collaboration in several areas is highly welcome. These include potential marketing support, feedback on game design and mechanics, as well as distribution strategies. This collaborative approach is key to ensuring that Nova Patria reaches its target audience and maximizes its market potential.</li></ul>'}
                            />
                        </StyledContainer>
                    </div>
                </div>
            </div>

            <SlideControls
                slideTotal={slideTotal}
                scrollToSlide={scrollToSlide}
                slidesContainerRef={slidesContainerRef}
            />
        </>
    );
};

export default App;