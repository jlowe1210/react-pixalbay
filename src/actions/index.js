import  * as TYPES  from '../types/index';
import axios from 'axios';

export function valueChange(value){
    return {
        type: TYPES.VALUECHANGE,
        payload: value
    }
};

export function test(term){
    return function(dispatch){
        dispatch({type: TYPES.START_LOADER})
        dispatch({type: TYPES.SEARCHED})
        setTimeout(()=>{
            axios.get('https://pixabay.com/api/', {
            params: {
                key: '7829095-d7e739eff9020f25ae222c075',
                image_type: 'photo',
                q: term
            }
        }).then(photos =>{
            const {data: {hits}} = photos;
            dispatch({type: TYPES.SEARCH_PHOTO, payload: hits});
            dispatch({type: TYPES.FINISH_LOADER})
        })
        }, 1000)
        
    }
}

