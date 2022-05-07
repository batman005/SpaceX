import {GET_LAUNCH,LAUNCH_ERROR} from '../types'

const initialState = {
    launch:[],
    loading:true
}

export default function launchReducer(state = initialState, action){
    switch(action.type){
        case GET_LAUNCH:
        return { ...state,launch:action.payload,loading:false}  
        case LAUNCH_ERROR:
            return{ loading: false, error: action.payload }
        default: return state
    }

}


