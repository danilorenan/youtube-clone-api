import { 
    ItemContainer,
    VideoTitle,
    VideoThumb,
    InfosContainer,
    ImageChannel,
    ChannelTitle
 } from './styles/styles';
import React, { useEffect, useState } from 'react';
import request from "../apis/youtube";
import { useHistory } from 'react-router-dom';


const VideoItem = ({video}) => {
    const history = useHistory();
    const handleVideoClick = () => {
       history.push(`/watch/${video.id}`)
    }
    const {
        id,
        snippet: {
           channelId,
           channelTitle,
           title,
           publishedAt,
           thumbnails: { medium },
        },
        contentDetails,
     } = video

     const [channelIcon, setChannelIcon] = useState(null);
     console.log(video)
     useEffect(() => {
        const get_channel_icon = async () => {
           const {
              data: { items },
           } = await request('/channels', {
              params: {
                 part: 'snippet',
                 id: channelId,
              },
           })
           setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
     }, [channelId])
    return (
        <ItemContainer id={video.id}>
                     {video.snippet.thumbnails.maxres === undefined ? (
                        <VideoThumb src={video.snippet.thumbnails.high.url} onClick={handleVideoClick} />
                     ) : (
                        <VideoThumb src={video.snippet.thumbnails.maxres.url} onClick={handleVideoClick} />
                     )}
                    <InfosContainer>
                        <ImageChannel src={channelIcon?.url} />
                        <VideoTitle>{video.snippet.title}</VideoTitle>
                    </InfosContainer>
                    <ChannelTitle>{channelTitle}</ChannelTitle>
        </ItemContainer>
    )
}

export default VideoItem;
