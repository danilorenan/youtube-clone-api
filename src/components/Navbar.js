import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { NavContainer, 
            Logo, 
            SearchNavBar, 
            NameLogo,
            IconSearch,
            ContainerSearchBar,
            ContainerLogo,
            MenuContainer, 
            UserContainer,
            UserImage, 
            IconMenu} from './styles/styles';
import { StylesProvider } from '@material-ui/styles';
import LogoTube from '../assets/alltube-icon.png';

const Navbar = ({ handleToggleSidebar }) => {
    const [input, setInput] = useState('');
    const history = useHistory();

    const handleOnSubmit = e => {
        e.preventDefault()
        history.push(`/search/${input}`)
    }
    return (
        <NavContainer>
            <MenuContainer>
                <IconMenu onClick={() => handleToggleSidebar()}/>
                <Link to='/' style={{textDecoration:'none'}}>
                    <ContainerLogo>
                        <Logo src={LogoTube} />
                        <NameLogo>AllTube</NameLogo>
                    </ContainerLogo>
                </Link>
            </MenuContainer>
            <ContainerSearchBar onSubmit={handleOnSubmit} >
                <SearchNavBar 
                    placeholder="Pesquisar"
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <div className='test'>
                    <IconSearch />
                </div>
            </ContainerSearchBar>
            <UserContainer>
                <UserImage src={LogoTube}/>
            </UserContainer>
        </NavContainer>
    )
}

export default Navbar;
