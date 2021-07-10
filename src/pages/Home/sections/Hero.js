import React from 'react'
import {Box} from '@material-ui/core'

const Hero = () => {
    return (
        <Box component="div">
            <Box component="div" className="hero-wrapper">
                <Box component="div" className="slide-txt">
                    <Box component="div" className="slide-title">
                        <h3>Mt Bromo N7</h3>
                    </Box>
                    <Box component="div" className="slide-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                    </Box>
                    <Box component="div" className="slide-btn">
                        <a href="#" className="hero-btn">
                            buy now
                        </a>
                    </Box>
                </Box>
                <Box component="div" className="slide-img">
                    <img src="./images/6489548.png" alt=""/>
                </Box>
            </Box>

            <Box component="div" className="hero-txt">
                you ride
            </Box>
        </Box>
    )
}

export default Hero
