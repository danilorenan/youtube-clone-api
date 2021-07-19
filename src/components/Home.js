import { HomeContainer } from "./styles/styles";
import VideoItem from './VideoItem';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'; 
import { getPopularVideos } from "../redux/actions/videosaction";
import request from "../apis/youtube";


const Home = () => {
    
    const {videos} = useSelector(state => state.homeVideos)
    
    const [channelIcon, setChannelIcon] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    },[dispatch])

   
    console.log(videos)

    return (
        <HomeContainer>
                {videos.map((video) => (
                        <VideoItem video={video} key={video.id} />
                    ))}
        </HomeContainer>
    )
}

export default Home;
