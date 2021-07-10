import React from 'react'
import {Box,Grid,Container} from '@material-ui/core'

const News = () => {
    return (
        // <div>
        <Box component="div" className="section  news-section" style={{paddingTop:'50px'}}>   
            <Box component="div" className="section-title">
                <h3 className="second-title">bike news</h3>
                <h3 className="main-title">latest news</h3>
                <Box component="div" className="btn-wrapper">
                    <Box component="div" className=" to-to">
                        <a href="#" className="news btn">view all news</a>
                    </Box>
                </Box>
            </Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="news-card to-to">
                           
                            <Box component="div" className="img-content" style={{backgroundImage:`url(./images/portuguese-gravity-MLbsn2aQfQs-unsplash.jpg)`,backgroundSize:'cover'}}>

                            </Box>
                            <h3 className="news-title">
                                <a href="#">
                                    Cycling On Your Period: Harness The Power Of Your Hormones
                                </a>
                            </h3>
                            <p className="news-preview">
                                Lorem ipsum dolor sit amet exercitationem reprehenderit assumenda similique debitis consequuntur aliquid eum dolores!...
                            </p>
                            <a href="#" className="btn">read more</a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="news-card to-to">
                           
                            <Box component="div" className="img-content" style={{backgroundImage:`url(./images/asoggetti-HPpj2190tGs-unsplash.jpg)`,backgroundSize:'cover'}}>

                            </Box>
                            <h3 className="news-title">
                                <a href="#">
                                    Cycling On Your Period: Harness The Power Of Your Hormones
                                </a>
                            </h3>
                            <p className="news-preview">
                                Lorem ipsum dolor sit amet exercitationem reprehenderit assumenda similique debitis consequuntur aliquid eum dolores!...
                            </p>
                            <a href="#" className="btn">read more</a>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="news-card to-to">
                           
                            <Box component="div" className="img-content" style={{backgroundImage:`url(./images/paolo-chiabrando-KSwd2lb3lfs-unsplash.jpg)`,backgroundSize:'cover'}}>

                            </Box>
                            <h3 className="news-title">
                                <a href="#">
                                    Cycling On Your Period: Harness The Power Of Your Hormones
                                </a>
                            </h3>
                            <p className="news-preview">
                                Lorem ipsum dolor sit amet exercitationem reprehenderit assumenda similique debitis consequuntur aliquid eum dolores!...
                            </p>
                            <a href="#" className="btn">read more</a>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="news-card to-to">
                            <a href="#" className="news-card-img">
                                <Box component="div" className="img-wrapper">
                                    <Box component="div" className="img" style={{backgroundImage: 'url(./images/asoggetti-HPpj2190tGs-unsplash.jpg)'}}></Box>
                                </Box>
                            </a>
                            <h3 className="news-title">
                                <a href="#">
                                    Cycling On Your Period: Harness The Power Of Your Hormones
                                </a>
                            </h3>
                            <p className="news-preview">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem reprehenderit assumenda similique debitis consequuntur aliquid eum temporibus tempora, error qui in iusto ducimus expedita earum aspernatur dignissimos, porro dolores!
                            </p>
                            <a href="#" className="btn">read more</a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component="div" className="news-card to-to">
                            <a href="#" className="news-card-img">
                                <Box component="div" className="img-wrapper">
                                    <Box component="div" className="img" style={{backgroundImage: `url(./images/paolo-chiabrando-KSwd2lb3lfs-unsplash.jpg)`}}></Box>
                                </Box>
                            </a>
                            <h3 className="news-title">
                                <a href="#">
                                    Cycling On Your Period: Harness The Power Of Your Hormones
                                </a>
                            </h3>
                            <p className="news-preview">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem reprehenderit assumenda similique debitis consequuntur aliquid eum temporibus tempora, error qui in iusto ducimus expedita earum aspernatur dignissimos, porro dolores!
                            </p>
                            <a href="#" className="btn">read more</a>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
    </Box>
        
    )
}

export default News
