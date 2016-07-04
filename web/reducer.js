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
        case 'SAVE_HASH':
            if(state.photos == null ) {
                photos = [action.photo];
            }
            return {
                ...state,
                photos: state.photos.push(action.photo)
            }
    }
    return state;
}