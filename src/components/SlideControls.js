import React from 'react';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Root = styled('div')({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1rem',
});

const StyledButtonGroup = styled(ButtonGroup)({
    backgroundColor: 'transparent',
});

const StyledButton = styled(Button)({
    border: '1px solid black',
    borderRadius: 0,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '0.5rem 1.5rem',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
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
            <div>
                <StyledButtonGroup>
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
                </StyledButtonGroup>
            </div>
        </Root>
    );
}

export default SlideControls;