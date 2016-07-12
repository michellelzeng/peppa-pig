export const addPhoto = (hash) => {
    return {
        type: 'ADD_PHOTO',
        photo: {
            hash: hash
        }
    }
}