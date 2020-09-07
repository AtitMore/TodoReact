import { todoService } from '../services';
import { history, showMessage } from '../helpers';
import { todoConstants } from '../constants/city.constant';

export const todoActions = {
    getTodoList,
    createTodoList
}

function getTodoList() {
    return dispatch => {
        dispatch(request);
        todoService.gettodoList().then(
            response => {
                const payload = response;
                dispatch(success(payload));
                return response;
            }, error => {
                dispatch(failure(error));
            }
        )
    }

    function request(){
        return { type: todoConstants.GET_ALL_TODO_REQUEST };
    }

    function success(payload){
        return { type: todoConstants.GET_ALL_TODO_SUCCESS, payload };
    }

    function failure(error){
        return { type: todoConstants.GET_ALL_TODO_FAILURE, error };
    }
}

function createTodoList() {
    return dispatch => {
        dispatch(request(data))
        todoService.addEnterpriser(data).then(
            response => {
                dispatch(hideLoader())
                if(!response){
                    showMessage('error', 'Sorry, looks like a network issue')
                } else if(response.status === 201) {
                    response.json().then( data => {
                        history.push('/enterprisers')
                        showMessage('success', 'Enterpriser Added Successfully');
                        dispatch(success(data))
                    })
                } else if(response.status === 409) {
                    response.json().then( data => {
                        showMessage('error', data.message);
                        dispatch(failure(data))
                    })
                } else {
                    showMessage('error', 'Something went wrong');
                }
            }, error => {
                dispatch(hideLoader())
                showMessage('error', error);
                dispatch(failure(error.toString()));
            }
        )
    }
    function request(data) {
        return { type: enterpriserConstants.ADD_ENTERPRISER_REQUEST, data }
    }
    function success(payload) {
        return { type: enterpriserConstants.ADD_ENTERPRISER_SUCCESS, payload }
    }
    function failure(error) {
        return { type: enterpriserConstants.ADD_ENTERPRISER_FAILURE, error }
    }
}