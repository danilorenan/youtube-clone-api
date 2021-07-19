import { SearchContainer } from "./styles/styles";
import VerticalVideos from "./VerticalVideos";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getSearchVideos } from '../redux/actions/videosaction';

const SearchScreen = () => {
    const { query } = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getSearchVideos(query))
    }, [query, dispatch])

    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <SearchContainer>
            {!loading ? (
                videos?.map(video => (
                    <VerticalVideos 
                        video={video}
                        key={video.id.videoId}
                        searchScreen
                    />

                ))
            ) : (
                <div>LOADING</div>
            )}
        </SearchContainer>        
    )
}

export default SearchScreen;
