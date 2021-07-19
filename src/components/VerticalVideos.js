import { VerticalContainer,
         ThumbnailContainer, 
         VerticalVideoThumbHigh,
         VerticalVideoThumbMax,
         VerticalInfosContainer,
         VerticalImageChannel,
         VerticalVideoTitle,
         VerticalChannelTitle,
         VerticalChannelContainer } from "./styles/styles";
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import request from "../apis/youtube";

const VerticalVideos = ({ video, searchScreen, subscreen }) => {
    const [channelIcon, setChannelIcon] = useState(null);
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
     } = video;

    const _videoId = id?.videoId || contentDetails?.videoId || id;
    const history = useHistory();
    
    const handleVideoClick = () => {
        history.push(`/watch/${_videoId}`)
    }

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
       <VerticalContainer>
           <ThumbnailContainer onClick={handleVideoClick}>
                {video.snippet.thumbnails.maxres === undefined ? (
                <VerticalVideoThumbHigh src={video.snippet.thumbnails.high.url} />
                ) : (
                <VerticalVideoThumbMax src={video.snippet.thumbnails.maxres.url} />
                )}
           </ThumbnailContainer>
                    <VerticalInfosContainer>
                        <VerticalVideoTitle>{video.snippet.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}</VerticalVideoTitle>
                        <VerticalChannelContainer>
                            <VerticalImageChannel src={channelIcon?.url} />
                            <VerticalChannelTitle>{video.snippet.channelTitle}</VerticalChannelTitle>
                        </VerticalChannelContainer>
                    </VerticalInfosContainer>
       </VerticalContainer>
    )
}

export default VerticalVideos;
