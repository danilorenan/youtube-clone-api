import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


//NAVBAR CONTAINER ---------------------

export const NavContainer = styled.div`
    background-color: rgb(33, 33, 33, 98%);
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column: 1/4;
    grid-row: 1/2;
    border: 1px solid #181818;
    z-index: 1;
`
export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
`
export const IconMenu = styled(MenuIcon)`
    color: #aaa;
    &:hover{
        color: white;        
    }
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
    border-radius: 8px;
`
export const NameLogo = styled.h1`
    color: #aaa;
    margin: 4px;
`
export const ContainerSearchBar = styled.form`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    .test {
        height: 1.8rem;
        width: 5rem;
        background-color: #181818;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 4px;
    }
`
export const SearchNavBar = styled.input`
    height: 1.8rem;
    width: 70%;
    color: #aaa;
    padding: 6px;
    text-decoration: none;
    background-color: #181818;
    border: 1px solid #181818;
`
export const IconSearch = styled(SearchIcon)`
    color: rgb(33, 33, 33);
    background-color: #181818;
    cursor: pointer;
    border: 1px solid #181818;
    &:hover{
        color: #f5f5f5;        
    }
`
export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
`
export const UserImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`
//HOME CONTAINER ----------------------

export const HomeContainer = styled.div`
    display: flex;
    overflow: auto;
    background-color: #181818;
    grid-column: 2/4;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

`
export const ItemContainer = styled.div`
    margin: 0.5rem;
    cursor: pointer;
    display: block;
`
export const VideoThumb = styled.img`
    object-fit: cover;
    width: 17.75rem;
    height: 9.96rem;
    box-shadow: 0.3rem 0.3rem 1rem black;
`
export const InfosContainer = styled.div`
    width: 17.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.4rem;
    letter-spacing: .25px;
   
    `
export const ImageChannel = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    margin: 2px;
    margin-right: 0.6rem;
`
export const VideoTitle = styled.div`
    width: 17.75rem;
    overflow: hidden;
    margin: 2px;
    line-height: 1.2rem;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 700;
    max-height: 2.3rem;
    text-overflow: ellipsis;
`
export const ChannelTitle = styled.h2`
    font-size: 0.8rem;
    font-weight: 100;
    margin-left: 3.1rem;
    color: #aaa;
    &:hover{
        color: #fff;
    }
`
//SIDEBAR CONTAINER --------------------

export const SideContainer = styled.nav`
        display: none;
        background-color: rgb(33, 33, 33, 98%);
        &.open {
            text-decoration: none;
            flex-direction: column;
            transition: transform 1s ease-in;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #181818;
            grid-column: 1/2;
            grid-row: 1/3;
            box-shadow: 0.5rem 0rem 3rem black;
            width: 14rem;
            z-index: 999;
            animation: example;
            animation-duration: 0.5s;
            top: -120px;
            bottom: -120px;
            right: 0;
            left: 0;
            position: fixed;
            transition-property: visibility;
            @keyframes example {
            0% {width: 0rem}
            100% {width: 14rem}
            }   
        }
`

//SEARCH SCREEN CONTAINER ---------------

export const SearchContainer = styled.div`
    background-color: #181818;
    overflow: auto;
    grid-column: 2/4;
`

//VERTICAL VIDEOS CONTAINER -------------

export const VerticalContainer = styled.div`
    margin: 1rem 0rem 1rem 0rem;
    display: flex;
    align-items: flex-start;
    justify-content: start;

`
export const ThumbnailContainer = styled.div`
    width:  19.75rem;
    height: 9.96rem;
    margin-bottom: 1rem;
    margin-right: 1.0rem;
`

export const VerticalVideoThumbMax = styled.img`
    object-fit: cover;
    box-shadow: 0.3rem 0.3rem 1rem black;
    margin-left: 1rem;
    border: 5px solid green;
    cursor: pointer;
`
export const VerticalVideoThumbHigh = styled.img`
    object-fit: cover;
    width: 19.75rem;
    height: 11rem;
    box-shadow: 0.3rem 0.3rem 1rem black;
    border: 1px solid #181818;
    margin-left: 1rem;
    cursor: pointer;
`
export const VerticalInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1rem;
    cursor: pointer;
   
`
export const VerticalVideoTitle = styled.div`
    font-size: 1.1rem;
    margin-right: 8rem;
    overflow: hidden;
    line-height: 1.7rem;
    color: #fff;
    font-weight: 500;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
`
export const VerticalChannelContainer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`
export const VerticalImageChannel = styled.img`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
`
export const VerticalChannelTitle = styled.h2`
    margin: 0.3rem;
    font-size: 0.75rem;
    font-weight: 100;
    color: #aaa;
    &:hover{
        color: #fff;
    }
`

//WATCH SCREEN CONTAINER ---------------------

export const WatchScreenContainer = styled.div`
    grid-column: 2/4;
    overflow: auto;
    background-color: #181818;
    display: flex;
    justify-content: center;
    
`
export const WatchScreenVideo = styled.iframe`
    width: 81vw;
    height: 94vh;
    margin: 1rem 0 1rem 0;
    box-shadow: 0.5rem 1rem 3rem black;
`
export const WatchScreenInfosContainer = styled.div`

`
export const WatchScreenTitle = styled.div`
    color: #fff
`