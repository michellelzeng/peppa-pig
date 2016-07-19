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

export const updateProgress = (hash, progress) => {
    return {
        type: 'UPDATE_PROGRESS',
        hash,
        progress
    }
};

