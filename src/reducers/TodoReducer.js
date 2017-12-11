import update from 'immutability-helper';
import actionTypes from '../actionTypes';
const initialState = {
    todos: [],
    editingId: null
};

const TodoReducerObject = {
    [actionTypes.receiveGetTodosSuccess](state, {todos}) {
        return update(state, {
            todos: {
                $set: todos
            }
        });
    },
    [actionTypes.requestAddTodo](state, {newTodo}) {
        return update(state, {
            todos: {
                $push: [ newTodo ]
            }
        });
    },
    [actionTypes.receiveAddTodoSuccess](state, {tempId, newTodo}) {
        const tempIndex = state.todos.findIndex(v => v.id === tempId);
        return update(state, {
            todos: {
                [tempIndex]: {
                    $set: newTodo
                }
            }
        });
    },
    [actionTypes.receiveAddTodoFailed](state, {tempId}) {
        const tempIndex = state.todos.findIndex(v => v.id === tempId);
        return update(state, {
            todos: {
                $splice: [
                    [ tempIndex, 1 ]
                ]
            }
        });
    },

    [actionTypes.requestDeleteTodo](state, {id}) {
        const deleteIndex = state.todos.findIndex(v => v.id === id);
        return update(state, {
            todos: {
                $splice: [
                    [ deleteIndex, 1 ]
                ]
            }
        });
    },
    [actionTypes.receiveDeleteTodoFailed](state, {todos}) {
        return update(state, {
            todos: {
                $set: todos
            }
        });
    },
    [actionTypes.editTodo](state, {id}) {
        return update(state, {
            editingId: {
                $set: id
            }
        });
    },
    [actionTypes.saveTodo](state, {id, editedTodo}) {
        const editIndex = state.todos.findIndex(v => v.id === id);
        return update(state, {
            todos: {
                [editIndex]: {
                    $set: editedTodo
                }
            },
            editingId: {
                $set: null
            }
        });
    },
    [actionTypes.cancelEdit](state) {
        return update(state, {
            editingId: {
                $set: null
            }
        });
    },
    [actionTypes.toggleTodo](state, {id, editedTodo}) {
        const editIndex = state.todos.findIndex(v => v.id === id);
        return update(state, {
            todos: {
                [editIndex]: {
                    $set: editedTodo
                }
            }
        });
    },
    [actionTypes.toggleAll](state, {todos}) {
        return update(state, {
            todos: {
                $set: todos
            }
        });
    },
    [actionTypes.clearCompleted](state) {
        return update(state, {
            todos: {
                $apply: todos => todos.filter(v => !v.isDone)
            }
        });
    }
};

const TodoReducer = (state = initialState, action) =>
    TodoReducerObject[action.type]
        ? TodoReducerObject[action.type](state, action)
        : state;

export default TodoReducer;
