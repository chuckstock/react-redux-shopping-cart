import { FETCH_TEAS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload);
    switch (action.type) {
    case FETCH_TEAS:
            return { ...state, all: action.payload.data };
    default:
        return state;
    }
}
