export function searched(state = false, action){
    switch(action.type){
        case 'SEARCHED':
            return state = true
        default:
            return state
    }
}