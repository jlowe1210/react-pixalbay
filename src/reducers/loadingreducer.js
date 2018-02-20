export function loadingReducer(state = null, action){
    switch(action.type){
        case 'START_LOADER':
            return state = true;
        case 'FINISH_LOADER':
            return state = false;
        default:
            return state
    }
}