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
    }
    return state;
}