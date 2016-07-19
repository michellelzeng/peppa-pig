/* example state
{
    posts: [
        {
            content: "Hello world",
            photos: [
                {
                    id: 1,
                    hash: '234e5353243242424'
                }
            ]
        }
    ],
    draft: {
            content: '',
            photos: [
                {
                    clientId: 0,
                    hash: '23132131313131231',
                    progress: 0.5
                }
            ]
        }
}


*/

const initialState = {
    status: 'loading',
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
                status: 'loaded',
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
        case 'UPDATE_PROGRESS': {
            // const newPhotos = state.draft.photos.map(function(photo) {
            //     if (photo.hash === action.hash) {
            //         return {
            //             ...photo,
            //             progress: action.progress
            //         }
            //     } else {
            //         return photo;
            //     }
            // });
            return {
                ...state,
                draft: {
                    ...state.draft,
                    photos: newPhotos
                }
            }
        }
    }
    return state;
}