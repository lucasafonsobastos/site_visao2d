import * as React from 'react';

import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import Logo from './Logo';

const pages = ['Home', 'Sobre nós', 'Serviços','Clientes', 'Contato'];

const AppBarStyled = styled(AppBar)(() => ({
    backgroundColor:'white',
}));



export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
          <AppBarStyled >
            <img src='/img/topo.png' alt='topo' id='img_topo'></img>
            <Container maxWidth='lg'>
              <Toolbar disableGutters sx={{display:'flex', flexDirection:'column', height: '8rem'}}>
                
                <Logo height='2.3rem'/>
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

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '1.5rem'} }}>
                  {pages.map((page) => (
                    <ScrollLink to={`${page}`} spy={true} smooth={true} offset={-70} duration={500}>
                        <Button 
                        key={page}
                        onClick={handleOpNavMenu}
                        sx={{my: 2, color:'#00A859', display: 'block'}}
                      >
                        {page}
                      </Button>
                    </ScrollLink>
                  ))}
                </Box>
                
              </Toolbar>
            </Container>
          </AppBarStyled>
      </Box>
    );
};