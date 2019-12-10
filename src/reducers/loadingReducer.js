import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    if (action.type === IMAGES.LOAD) {
        return true;
    }
    else if (action.type === IMAGES.LOAD_SUCCESS || action.type === IMAGES.LOAD_FAIL) {
        return false;
    }
    else {
        return state;
    }
};

export default loadingReducer;