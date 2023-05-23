import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import './SlideControls.scss';

const Root = styled('div')({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
});

const StyledButton = styled(Button)({
    backgrounColor: 'transparent',

    borderRadius: 0,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '0.5rem 1.5rem',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
    margin: '0.5em'
});

function SlideControls({ slideTotal, scrollToSlide, slidesContainerRef }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isUnlockButtonGlow, setIsUnlockButtonGlow] = useState(false);

    //button glow
    useEffect(() => {
        setIsUnlockButtonGlow(false);

        let slide;
        const handleScroll = () => {
            if (slide) {
                const isBottom = slide.scrollHeight - slide.scrollTop === slide.clientHeight;
                setIsUnlockButtonGlow(isBottom);
            }
        };
        if (slidesContainerRef.current) {
            slide = slidesContainerRef.current.children[activeSlide].firstElementChild.firstElementChild;
            if (slide) {
                const hasOverflow = slide.scrollHeight > slide.clientHeight;
                if(!hasOverflow){
                    setIsUnlockButtonGlow(true);
                }
                else{
                    slide.addEventListener('scroll', handleScroll);
                }
            }
        }

        return () => {
            if (slide) {
                slide.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeSlide, slideTotal, slidesContainerRef]);

    //scroll to activeSlide
    useEffect(() => {
        scrollToActiveSlide();
    }, [activeSlide, scrollToSlide]);

    // window resize
    useEffect(() => {
        window.addEventListener('resize', scrollToActiveSlide);

        return () => {
            window.removeEventListener('resize', scrollToActiveSlide);
        };
    }, [activeSlide, scrollToSlide]);

    const scrollToActiveSlide = () => {
        scrollToSlide(activeSlide);
    };
    const handlePrevSlide = () => {
        setActiveSlide(Math.max(0, activeSlide - 1));
    };
    const handleNextSlide = () => {
        setActiveSlide(Math.min(slideTotal - 1, activeSlide + 1));
    };

    return (
        <Root>
            <div id="SlideControls">
                <div>
                    <StyledButton
                        onClick={handlePrevSlide}
                        disabled={activeSlide === 0}
                    >
                        Previous
                    </StyledButton>
                    <StyledButton
                        onClick={handleNextSlide}
                        disabled={activeSlide === slideTotal - 1}
                        sx={{
                            boxShadow: activeSlide !== slideTotal - 1 && isUnlockButtonGlow ? '0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0' : 0
                        }}
                    >
                        Next
                    </StyledButton>
                </div>
                <div id="copyright">
                    <span>Copyright © 2023 </span>
                    <a href='https://sowerinteractive.com/' target='_blank' rel='noreferrer'>Sower Interactive LLC</a>
                    <span>. All rights reserved.</span>
                </div>
            </div>
        </Root>
    );
}

export default SlideControls;