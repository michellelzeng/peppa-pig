export const addPhoto = (hash) => {
    return {
        type: 'ADD_PHOTO',
        photo: {
            hash: hash
        }
    }
};

export const changeContent = (content) => {
    return {
        type: 'CHANGE_CONTENT',
        content: content
    }    
};