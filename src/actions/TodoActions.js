import actionTypes from '../actionTypes';
import axios from 'axios';
const ax = axios.create({
    baseURL: 'http://localhost:2403/todos'
});

const TodoActions = {
    getTodos: () => dispatch => {
        dispatch({
            type: actionTypes.requestGetTodos
        });
        ax.get('/')
        .then(res => dispatch({
            type: actionTypes.receiveGetTodosSuccess,
            todos: res.data
        }))
        .catch(() => dispatch({
            type: actionTypes.receiveGetTodosFailed
        }));
    },
    addTodo: text => dispatch => {
        const tempId = 'temp_' + Date.now();
        dispatch({
            type: actionTypes.requestAddTodo,
            newTodo: {
                id: tempId,
                text,
                isDone: false,
                isTemporal: true
            }
        });
        ax.post('/', { text })
        .then(res => dispatch({
            type: actionTypes.receiveAddTodoSuccess,
            tempId,
            newTodo: res.data
        }))
        .catch(() => dispatch({
            type: actionTypes.receiveAddTodoFailed,
            tempId
        }));
    },
    deleteTodo: id => (dispatch, getState) => {
        const prevTodos = getState().todos;
        dispatch({
            type: actionTypes.requestDeleteTodo,
            id
        });
        ax.delete(`/${id}`)
        .then(() => dispatch({
            type: actionTypes.receiveDeleteTodoSuccess,
        }))
        .catch(() => dispatch({
            type: actionTypes.receiveDeleteTodoFailed,
            todos: prevTodos
        }));
    },
    editTodo: id => ({
        type: actionTypes.editTodo,
        id
    }),
    saveTodo: (id, newText) => dispatch =>
        ax.put(`/${id}`, { text: newText })
        .then(res => dispatch({
            type: actionTypes.saveTodo,
            id,
            editedTodo: res.data
        })),
    cancelEdit: () => ({
        type: actionTypes.cancelEdit
    }),
    toggleTodo: id => (dispatch, getState) => {
        const newDone = !getState().todos.find(v => v.id === id).isDone;
        ax.put(`/${id}`, { isDone: newDone })
        .then(res => dispatch({
            type: actionTypes.toggleTodo,
            id,
            editedTodo: res.data
        }));
    },
    toggleAll: () => (dispatch, getState) => {
        const prevTodos = getState().todos;
        const newDone = prevTodos.some(v => !v.isDone);
        const axArray = prevTodos.map(v =>
            ax.put(`/${v.id}`, { isDone: newDone })
        );
        axios.all(axArray)
        .then(res => dispatch({
            type: actionTypes.toggleAll,
            todos: res.map(v => v.data)
        }));
    },
    clearCompleted: () => (dispatch, getState) => {
        const prevTodos = getState().todos;
        const axArray = prevTodos.filter(v => v.isDone)
        .map(v => ax.delete(`/${v.id}`));
        axios.all(axArray)
        .then(() => dispatch({
            type: actionTypes.clearCompleted
        }));
    }
};

export default TodoActions;
