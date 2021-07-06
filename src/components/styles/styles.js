import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

//NAVBAR CONTAINER ---------------------

export const NavContainer = styled.div`
    background-color: rgb(33, 33, 33, 98%);
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    grid-row: 1/2;
`
export const ContainerLogo = styled.div`
    display: flex;
    width: 10rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const Logo = styled.img`
    width: 2.5rem;
    height: 2rem;
    margin: 4px;
`
export const NameLogo = styled.h1`
    color: #fff;
    margin: 4px;
`
export const ContainerSearchBar = styled.div`
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SearchNavBar = styled.input`
    color: #f5f5f5;
    padding: 4px;
    text-decoration: none;
    background-color: #181818;
    width: 80%;
    height: 1.8rem;
    border: none;
`
export const IconSearch = styled(SearchIcon)`
    width: 3.8rem;
    color: rgb(33, 33, 33);
    height: 1.8rem;
    background-color: #181818;
    margin-top: 3.1px;
    margin-left: 2px;
    padding: 4px;
    cursor: pointer;
    &:hover{
        color: #f5f5f5;
        

    }
`

//HOME CONTAINER ----------------------

export const HomeContainer = styled.div`
    display: flex;
    overflow: auto;
    background-color: #f5f5f5;
    grid-column: 2/4;
    padding: 1rem;
    flex-wrap: wrap;
`
export const ItemContainer = styled.div`
    margin: 1rem;
`
export const VideoThumb = styled.img`
    width: 17.75rem;
    height: 9.96rem;
`
export const InfosContainer = styled.div`
    width: 17.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImageChannel = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    margin: 2px;
`
export const VideoTitle = styled.h1`
    margin: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-lines: 1;
    font-weight: 700;
    
`
export const ChannelTitle = styled.h2`
    font-size: 0.8rem;
    margin-left: 2.60rem;
`
//SIDEBAR CONTAINER --------------------

export const SideContainer = styled.div`
    height: 100% auto;
    background-color: rgb(33, 33, 33, 98%);
    grid-column: 1/2;
    grid-row: 2/3;
`