import React from 'react';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './SlideControls.scss';

const Root = styled('div')({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
});

const StyledButtonGroup = styled(ButtonGroup)({
    backgroundColor: ""
});

const StyledButton = styled(Button)({
    backgrounColor: 'transparent',
    border: '1px solid silver',
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

function SlideControls({ activeSlide, slideTotal, handleButtonClick }) {

    const handlePrevSlide = () => {
        handleButtonClick(Math.max(0, activeSlide - 1));
    };
    const handleNextSlide = () => {
        handleButtonClick(Math.min(slideTotal - 1, activeSlide + 1));
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