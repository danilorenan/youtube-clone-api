import { HomeContainer,
         ItemContainer,
         VideoThumb,
         VideoTitle,
         InfosContainer, 
         ImageChannel,
         ChannelTitle} from "./styles/styles";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'; 
import ImageThumb from '../assets/VideoThumb.jpg';
import ImgChannel from '../assets/Image-Channel.jpg';
import { getPopularVideos } from "../redux/actions/videosaction";


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos)
    },[dispatch])
    
    return (
        <HomeContainer>
            <ItemContainer>
                <VideoThumb src={ImageThumb} />
                <InfosContainer>
                    <ImageChannel src={ImgChannel} />
                    <VideoTitle>4 SÉRIES INDISPENSÁVEIS PRA VOCÊ ASSISTIR AGORA!kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</VideoTitle>
                </InfosContainer>
                <ChannelTitle>Holandês Voador</ChannelTitle>
            </ItemContainer>
        </HomeContainer>
    )
}

export default Home;
