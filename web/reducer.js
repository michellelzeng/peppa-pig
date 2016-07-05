const initialState = {
    posts: []
};

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            };
        case 'SAVE_HASH':{
            let photos = [];
            if(state.photos == null ) {
                photos = [action.photo];
            }else{
                photos = state.photos.concat(action.photo);
            }
            return {
                ...state,
                photos
            }
        }
    }
    return state;
}