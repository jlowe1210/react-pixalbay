export function photoReducer(photos = [], action){
    switch(action.type){
        case 'RESET_LIST':
            return [];
        case 'SEARCH_PHOTO':
            return [...action.payload]
        default:
            return photos;
    }


}


