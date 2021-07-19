import { IconMenu, Logo, SideContainer } from "./styles/styles";
import { Link } from 'react-router-dom';
import  AppLogo  from '../assets/alltube-icon.png';

const SideBar = ({sidebar, handleToggleSidebar}) => {
    return (
        <SideContainer className={sidebar? 'sidebar open' : 'sidebar'}
            onClick={() => handleToggleSidebar(false)}
        >
                <IconMenu />
                <Logo src={AppLogo}/>
                <Link to='/'>
                    <li>
                        <span>Home</span>
                    </li>
                </Link>
                <Link to='/'>
                    <li>
                        <span>Home</span>
                    </li>
                </Link>
                <Link to='/'>
                    <li>
                        <span>Home</span>
                    </li>
                </Link>
                <Link to='/'>
                    <li>
                        <span>Home</span>
                    </li>
                </Link>
            
        </SideContainer>
    )
}

export default SideBar
