import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

function postReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;

    }
}

export default postReducer;