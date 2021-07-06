import React from 'react';
import { NavContainer, 
            Logo, 
            SearchNavBar, 
            NameLogo,
            IconSearch,
            ContainerSearchBar,
            ContainerLogo } from './styles/styles';
import { StylesProvider } from '@material-ui/styles';
import LogoTube from '../assets/alltube-icon.png';

const Navbar = () => {
    return (
        <NavContainer>
            <ContainerLogo>
                <Logo src={LogoTube} />
                <NameLogo>AllTube</NameLogo>
            </ContainerLogo>
            <ContainerSearchBar>
                <SearchNavBar placeholder="Pesquisar"/>
                <StylesProvider injectFirst>
                    <div>
                        <IconSearch />
                    </div>
                </StylesProvider>
            </ContainerSearchBar>
        </NavContainer>
    )
}

export default Navbar;
