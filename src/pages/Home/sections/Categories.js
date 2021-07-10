import React from 'react'
import {Box,Grid,Container} from '@material-ui/core'

const Categories = () => {
    return (
        <Box component="div">
            <Box component="div" className="section-title">
                <h3 className="second-title">bike category</h3>
                <h3 className="main-title">choose your style</h3>
            </Box>

            <Container>
                <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="category-img">
                            <Box component="div" className="category-img-inner" style={{backgroundImage: 'url(./images/alvan-nee-EHILKZNmTuA-unsplash.jpg)'}}></Box>
                            <Box component="div" className="category-title">
                                Urban
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="category-img">
                            <Box component="div" className="category-img-inner" style={{backgroundImage: 'url(./images/eberhard-grossgasteiger-8lDkmXnKo7s-unsplash.jpg)'}}></Box>
                            <Box component="div" className="category-title">
                                mountain
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="category-img">
                            <Box component="div" className="category-img-inner" style={{backgroundImage: 'url(./images/tom-austin-3L76b-LMyeI-unsplash.jpg)'}}></Box>
                            <Box component="div" className="category-title">
                                Road
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            
        </Box>
    )
}

export default Categories
