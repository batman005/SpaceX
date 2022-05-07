import {GET_LAUNCH,GET_LAUNCHES, LAUNCH_ERROR}  from '../types'
import axios from 'axios'
import {TopUrl,LaunchUrl} from '../api/api'

export const getLaunch = () => async dispatch => {
    try{
        const res = await axios.get(`${[TopUrl]}`)
        dispatch({
            type: GET_LAUNCH,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: LAUNCH_ERROR,
            payload: err.response.data
        })
    }
}

export const getLaunches = () => async dispatch => {
    try{
        const res = await axios.get(`${[LaunchUrl]}`)
        dispatch({
            type: GET_LAUNCHES,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: LAUNCH_ERROR,
            payload: err.response.data
        })
    }
}
