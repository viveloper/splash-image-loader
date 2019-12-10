import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    if (action.type === IMAGES.LOAD_FAIL) {
        return action.error;
    }
    else if (action.type === IMAGES.LOAD || action.type === IMAGES.LOAD_SUCCESS) {
        return null;
    }
    else {
        return state;
    }
};

export default errorReducer;