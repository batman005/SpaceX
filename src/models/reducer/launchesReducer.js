import {GET_LAUNCHES,LAUNCH_ERROR} from '../types'

const initialState = {
    launches: [],
    loading:true
}

export default function launchReducer(state = initialState, action){
    switch(action.type){
        
        case GET_LAUNCHES:
        return { ...state , launches:action.payload,loading:false}
        case LAUNCH_ERROR:
            return{ loading: false, error: action.payload }
        default: return state
    }

}