import React, { useState, useEffect, useRef } from "react";
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
    margin: '0 0.5em'
});

function SlideControls({ slideTotal, scrollToSlide }) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        scrollToSlide(activeSlide);
    }, [activeSlide]);

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
                            boxShadow: activeSlide === 0 ? '0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0' : 0 
                        }}
                    >
                        Next
                    </StyledButton>
                </div>
                <div id="copyright">
                    <span>Copyright © 2023 </span>
                    <a href='https://sowerinteractive.com/' target='_blank'>Sower Interactive LLC</a>
                    <span>. All rights reserved.</span>
                </div>
            </div>
        </Root>
    );
}

export default SlideControls;