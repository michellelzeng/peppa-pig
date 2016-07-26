export const uploadPhoto = (photo) => {
    return {
        type: 'UPLOAD_PHOTO',
        photo: photo
    }
};

export const updatePhotoHash = (clientId, hash) => {
    return {
        type: 'UPDATE_PHOTO_HASH',
        photo: {
            clientId,
            hash
        }
    }
};

export const changeContent = (content) => {
    return {
        type: 'CHANGE_CONTENT',
        content: content
    }    
};

export const setUploadingProgress = (clientId, progress) => {
    return {
        type: 'SET_UPLOADING_PROGRESS',
        clientId,
        progress
    }
};

