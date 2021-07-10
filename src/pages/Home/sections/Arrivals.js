import React from 'react'
import {Box,Grid} from '@material-ui/core'

const Arrivals = () => {
    return (
        <Box component="div" style={{padding: '300px 20px  0'}}>
           <Box component="div" className="section-title">
                <h3 className="second-title">new bikes</h3>
                <h3 className="main-title">new arrivals</h3>
                <Box component="div" className="btn-wrapper">
                    <Box component="div" className="to-to">
                        <a href="#" className="btn">view all bikes</a>
                    </Box>
                </Box>
            </Box> 

            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Box component="div" className="product-card product-card-large">
                        <a href="#">
                            <Box component="div" className="product-card-img">
                                <img src="./images/Polygon Cascade.png" alt=""/>
                            </Box>
                            <h3 className="product-name">
                                polygon cascade
                            </h3>
                            <span className="product-price">
                                $3,900.00
                            </span>
                        </a>
                        <button className="btn">add to cart</button>
                    </Box>
                </Grid>

                <Grid item container xs={12} sx={12} md={6}>
                    <Grid item xs={12} sm={6}>
                        <Box component="div" className="product-card">
                            <a href="#">
                                <Box component="div" className="product-card-img  product-card-medium">
                                    <img src="./images/b2.png" alt=""/>
                                </Box>
                                <h3 className="product-name">
                                    norco youth bicycle
                                </h3>
                                <span className="product-price">
                                    $3,900.00
                                </span>
                            </a>
                            <button className="btn">add to cart</button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box component="div" className="product-card">
                            <a href="#">
                                <Box component="div" className="product-card-img product-card-medium">
                                    <img src="./images/MTBROMO_N7_2022.png" alt=""/>
                                </Box>
                                <h3 className="product-name">
                                    mt bromo n7
                                </h3>
                                <span className="product-price">
                                    $3,900.00
                                </span>
                            </a>
                            <button className="btn">add to cart</button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box component="div" className="product-card">
                            <a href="#">
                                <Box component="div" className="product-card-img product-card-medium">
                                    <img src="./images/b1.png" alt=""/>
                                </Box>
                                <h3 className="product-name">
                                    haibike xduro rx
                                </h3>
                                <span className="product-price">
                                    $3,900.00
                                </span>
                            </a>
                            <button className="btn">add to cart</button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box component="div" className="product-card">
                            <a href="#">
                                <Box component="div" className="product-card-img product-card-medium">
                                    <img src="./images/531352.png" alt=""/>
                                </Box>
                                <h3 className="product-name">
                                    polygon siskiu
                                </h3>
                                <span className="product-price">
                                    $3,900.00
                                </span>
                            </a>
                            <button className="btn">add to cart</button>
                        </Box>
                    </Grid>
                   

                </Grid>

            </Grid>

        </Box>
    )
}

export default Arrivals
