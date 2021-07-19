import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SEARCH_VIDEOS_FAIL, SEARCH_VIDEOS_REQUEST, SEARCH_VIDEOS_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType";

export const homeVideosReducer = (state={
    videos:[],
    loading: false,
    nextPageToken:null
}, action) => {
    const {type, payload} = action;

    switch(type){
        case HOME_VIDEOS_SUCCESS:return {
            ...state,
            videos:payload.videos,
            loading:false,
            nextPageToken:payload.nextPageToken,
        }
        case HOME_VIDEOS_FAIL:return {
            ...state,
            loading:false,
            e:payload,
        }
        case HOME_VIDEOS_REQUEST:return {
            ...state,
            loading:true,
        }
        default:return state
    }
}

export const searchedVideosReducer = (
    state = {
        loading:true,
        videos:[]
    },
    action 
) => {
    const {payload, type} = action

    switch (type) {
        case SEARCH_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
            }
        case SEARCH_VIDEOS_FAIL:
            return {
                ...state,
                loading:false,
                e: payload,
            }
        default:
            return state
    }
}

export const selectedVideoReducer = (
    state = {
        loading: true,
        video: null,
    },
    action
) => {
    const { payload, type } = action

    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading:false,
            }
        case SELECTED_VIDEO_FAIL: 
            return {
                ...state,
                video: null,
                loading: false,
            }
        default:
            return state
    }
}