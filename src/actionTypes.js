const actionTypes = {
    requestGetTodos: 'REQUEST_GET_TODOS',
    receiveGetTodosSuccess: 'RECEIVE_GET_TODOS_SUCCESS',
    receiveGetTodosFailed: 'RECEIVE_GET_TODOS_FAILED',
    requestAddTodo: 'REQEUEST_ADD_TODO',
    receiveAddTodoSuccess: 'RECEIVE_ADD_TODO_SUCCESS',
    receiveAddTodoFailed: 'RECEIVE_ADD_TODO_FAILED',
    requestDeleteTodo: 'REQUEST_DELETE_TODO',
    receiveDeleteTodoSuccess: 'RECEIVE_DELETE_TODO_SUCCESS',
    receiveDeleteTodoFailed: 'RECEIVE_DELETE_TODO_FAILED',
    editTodo: 'EDIT_TODO',
    saveTodo: 'SAVE_TODO',
    cancelEdit: 'CANCEL_EDIT',
    toggleTodo: 'TOGGLE_TODO',
    toggleAll: 'TOGGLE_ALL',
    clearCompleted: 'CLEAR_COMPLETED'
};

export default actionTypes;
