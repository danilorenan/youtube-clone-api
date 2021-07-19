import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { WatchScreenContainer, 
        WatchScreenInfosContainer, 
        WatchScreenTitle, 
        WatchScreenVideo } from './styles/styles';
import VideoItem from './VideoItem';
import { getVideosById } from '../redux/actions/videosaction';

const WatchScreen = () => {
    const { id } = useParams();
    const { video, loading } = useSelector(state => state.selectedVideo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosById(id))
    }, [dispatch, id])
    return (
        <WatchScreenContainer>
            <Helmet>
                <title>{video?.snippet?.title}</title>
            </Helmet>
            <WatchScreenInfosContainer>
                <WatchScreenVideo
                    allow='autoplay' 
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    allowFullScreen
                    width= '90vw'
                    height= '100%'
                    frameBorder='0'
                    loading='lazy'
                    
                ></WatchScreenVideo>
                <WatchScreenTitle>
                    {video?.snippet?.title}
                </WatchScreenTitle>
            </WatchScreenInfosContainer>
        </WatchScreenContainer>
    )
}

export default WatchScreen;
