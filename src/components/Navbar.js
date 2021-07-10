import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {Link,useLocation} from 'react-router-dom'
import {Hidden,Grid,Badge,IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';

function ElevationScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
   
    window: PropTypes.func,
};

const Navbar = (props) => {
    return (
        <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{background:"#1d1d1d"}}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-between', paddingTop:'10px'}}>
            
            <Link to="/" className="logo">
                <img src="./images/TuaBike.png" alt=""/>
            </Link>

            <Hidden mdUp>
              <IconButton component={Link} to="" color="inherit" aria-label="Show cart items">
                <Badge badgeContent={2} color="primary">
                  <ShoppingCart size="large"/>
                </Badge>
              </IconButton>
            </Hidden>
                 
            {/* <Hidden mdDown> */}
                <div className="main-menu-wrapper">
                    <ul className="main-menu">
                        <Typography variant="h6"><Link to="/" className="active">home</Link></Typography>
                        <Typography variant="h6"><Link to="/shop">shop</Link></Typography>
                        <Typography variant="h6"><Link to="/dealer">dealer</Link></Typography>
                        <Typography variant="h6"><Link to="/about">about</Link></Typography>
                        <Typography variant="h6"><Link to="/contact">contact</Link></Typography>
                    </ul>
                </div>
            {/* </Hidden> */}

            <Hidden mdDown>
              <IconButton component={Link} to="" color="inherit" aria-label="Show cart items">
                <Badge badgeContent={2} color="primary">
                  <ShoppingCart size="large"/>
                </Badge>
              </IconButton>
            </Hidden>

            <Hidden mdUp>
              <MenuIcon/>
            </Hidden>
                
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    )
}

export default Navbar
