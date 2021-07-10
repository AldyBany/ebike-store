import React from 'react'
import {Box} from '@material-ui/core'

const Special = () => {
    return (
        <Box component="div">
            <Box component="div" className="section special-section">
                <Box component="div" className="section-title">
                    <h3 className="second-title">
                        best seller
                    </h3>
                    <h3 className="main-title">xtrada hardtail</h3>
                    <Box component="div" className="special-price">
                        $1,099.00
                    </Box>
                    <Box component="div" className="special-section-btn">
                        <a href="#" className="btn">buy now</a>
                    </Box>
                </Box>
                <Box component="div" className="special-img">
                    <img src="./images/6489548.png" alt="" className="to-"/>
                </Box>
            </Box>
        </Box>
    )
}

export default Special
