import * as React from 'react';

import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import Logo from './Logo';

const AppBarStyled = styled(AppBar)(() => ({
    backgroundColor:'white',
    color: '#00A859',
    boxShadow: '0 0 0',
}));

export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null); //React.useState<null | HTMLElement>(null);

  const pages = ['Home', 'Institucional', 'Serviços', 'Clientes', 'Contato'];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleOpNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target.innerText);
    setAnchorElNav(null);
    //indo ate a parte do site que esta na opção selecionada...
  }

    return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBarStyled sx={{flexDirection:'column'}} >
            <img src='/img/topo.png' alt='topo' id='img_topo'></img>
            <Container maxWidth='lg'>

              <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <Toolbar disableGutters sx={{display:'flex', height: '8rem'}}>
                  
                  <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                      size='large'
                      color='inherit'
                      onClick={handleOpenNavMenu}
                      >
                          <MenuIcon color='#00A859'/>
                    </IconButton>

                    <Menu 
                      id='menu-appbar'
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                          display: {xs: 'block', md: 'none'},
                      }}
                      >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={handleOpNavMenu}>
                          <ScrollLink to={`${page}`} spy={true} smooth={true} offset={-70} duration={500}>
                            <Typography >{page}</Typography>
                          </ScrollLink>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                  <Logo height='2.3rem'/>

                </Toolbar>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center'}, flexDirection: 'column', marginTop: '4rem' }}>
                <Toolbar >
                  <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Logo height='2.3rem'/>
                    <Box sx={{display: 'flex' ,flexDirection: 'row', marginTop: '2rem'}}>
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleOpNavMenu}>
                          <ScrollLink to={`${page}`} spy={true} smooth={true} offset={-70} duration={500}>
                            <Typography >{page}</Typography>
                          </ScrollLink>
                        </MenuItem>
                      ))}
                    </Box>
                  </Box>

                </Toolbar>
              </Box>

            </Container>
          </AppBarStyled>
      </Box>
    );
};