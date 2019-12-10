import { IMAGES } from '../constants';

function pageReducer(state = 1, action) {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return state + 1;
    }
    return state;
}

export default pageReducer;