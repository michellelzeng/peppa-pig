/* example state
{
    posts: [
        {
            content: "Hello world",
            photos: [
                {
                    id: 1,
                    hash: 234e5353243242424
                }
            ]
        }
    ],
    draft: {
            content: '',
            photos: [
                {
                    hash: 23132131313131231
                }
            ]
        }
}


*/

const initialState = {
    posts: [],
    draft: {
        content: '',
        photos: []
    }
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts,
                draft: {}
            };
        case 'ADD_PHOTO': {
            let photos = [];
            if (state.draft.photos == null || state.draft.photos.lenght === 0) {
                photos = [action.photo];
            } else {
                photos = state.draft.photos.concat(action.photo);
            }
            return {
                ...state,
                draft: {
                    ...state.draft,
                    photos: photos
                }
            }
        }
        case 'ADD_POST':
            return {
                posts: [action.post].concat(state.posts),
                draft: {
                    content: '',
                    photos: []
                }

            }
        case 'CHANGE_CONTENT': {
            return {
                ...state,
                draft: {
                    ...state.draft,
                    content: action.content
                }
            }
        }
    }
    return state;
}