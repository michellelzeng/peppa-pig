import {updatePhotoHash} from '../action-creator';

export default store => (next) => {
    let clientId = 1;
    return action => {
        if(action.type === 'UPLOAD_PHOTO') {
            action.clientId = clientId;
            const formData = new FormData();
            formData.append("file", action.photo);
            const xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function() {
                if(xmlHttpRequest.readyState === XMLHttpRequest.DONE) {
                    const hash = xmlHttpRequest.responseText;
                    store.dispatch(updatePhotoHash(action.clientId, hash));
                }
            };
//            xmlHttpRequest.upload.addEventListener('progress', this.updateProgress);
            xmlHttpRequest.open('POST', '/uploadFile');
            xmlHttpRequest.send(formData);
            clientId++;
        }
        const result = next(action);
        return result;
        }
    };