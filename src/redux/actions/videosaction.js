import { HOME_VIDEOS_REQUEST } from "../actionType";
import request from '../../apis/youtube';

export const getPopularVideos = () => async dispatch =>{
    try{
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const res = await request('/videos', {
            params: {
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                regionCode: 'BR',
                maxResults: 6,
                pageToken: ''
            }
        })
        console.log(res)

    }catch(e){
        console.log(e)
    }
}