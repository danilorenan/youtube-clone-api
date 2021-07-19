import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { homeVideosReducer,
        searchedVideosReducer, 
        selectedVideoReducer} from './reducers/videosreducer';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    homeVideos: homeVideosReducer, 
    searchedVideos: searchedVideosReducer,
    selectedVideo: selectedVideoReducer,
})

const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;