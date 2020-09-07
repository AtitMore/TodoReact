import { todoConstants } from '../constants/todo.constant';

const initialState = {
    todoList: [],
}

export function todo(state = initialState, action){
    switch(action.type) {
        case todoConstants.GET_ALL_TODO_REQUEST:
            return state;
        case todoConstants.GET_ALL_TODO_SUCCESS:
            return {
                ...state,
                todoList: action.payload
            }
        case todoConstants.GET_ALL_TODO_FAILURE:
            return {};
        default:
            return state;
    }
}