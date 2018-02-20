export function searchValueReducer(state = '', action){
    switch(action.type){
        case 'VALUE_CHANGE':
         return  state = action.payload
    default: 
        return state;
    }
}