import { HOME_VIDEOS_FAIL, 
    HOME_VIDEOS_REQUEST, 
    HOME_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL,
    SEARCH_VIDEOS_REQUEST, 
    SEARCH_VIDEOS_SUCCESS,
    SELECTED_VIDEO_FAIL,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS} from "../actionType";
import request from '../../apis/youtube';

export const getPopularVideos = () => async (dispatch, getState) =>{
    try{
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const {data} = await request('/videos', {
            params: {
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                regionCode: 'BR',
                maxResults: 8,
                pageToken: getState().homeVideos.nextPageToken
            }
        })
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken: data.nextPageToken,
            }
        })

    }catch(e){
        console.log(e.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:e.message
        })
    }
}

export const getSearchVideos = keyword => async dispatch => {
    try{
        dispatch({
            type:SEARCH_VIDEOS_REQUEST
        })
        const {data} = await request('/search', {
            params: {
                part: 'snippet',
                maxResults: 6,
                q:keyword,
                type: 'video, channel',
            }
        })
        dispatch({
            type: SEARCH_VIDEOS_SUCCESS,
            payload: data.items
        })
    }catch(e) {
        console.log(e.message)
        dispatch({
            type:SEARCH_VIDEOS_FAIL,
            payload: e.message
        })
    }
}

export const getVideosById = id => async dispatch => {
    try {
        dispatch({
            type: SELECTED_VIDEO_REQUEST,
        })
        const { data } = await request('/videos', {
            params: {
                part: 'snippet, statistics',
                id: id,
            }
        })
        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0],
        })
    }catch(e){
        console.log(e.message)
        dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: e.message
        })
    }
}