import {
    AUDIO_PLAYING, 
    AUDIO_TIME, 
    AUDIO_ERROR, 
    AUDIO_PAUSE,
    AUDIO_SET_TIME,
    AUDIO_CURRENT_TIME,
    AUDIO_PLAYER_VIEW_WIDTH
} from '../actions/types';

const INITIAL_STATE = {
    totalTime: 0,
    isPlaying: false,
    isPaused: false,
    setTime: 0,
    currentTime: 0,
    viewWidth: 0,
    error: null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case AUDIO_PLAYING: 
            return {...state, isPlaying: action.payload }
        case AUDIO_TIME: 
            return {...state, totalTime: action.payload }
        case AUDIO_ERROR: 
            return {...state, error: action.payload }
        case AUDIO_PAUSE: 
            return {...state, isPaused: action.payload }
        case AUDIO_SET_TIME:
            return {...state, setTime: action.payload }
        case AUDIO_CURRENT_TIME:    
            return {...state, currentTime: action.payload }
        case AUDIO_PLAYER_VIEW_WIDTH:
            return {...state, viewWidth: action.payload }
        default:
            return state; 
    }
}