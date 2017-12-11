import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

import TodoActions from '../actions/TodoActions';

const mapStateToProps = state => ({
    todos: state.todos,
    editingId: state.editingId
});
const mapDispatchToProps = dispatch => ({
    getTodos: () => dispatch(TodoActions.getTodos()),
    addTodo: text => dispatch(TodoActions.addTodo(text)),
    deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
    editTodo: id => dispatch(TodoActions.editTodo(id)),
    saveTodo: (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    cancelEdit: () => dispatch(TodoActions.cancelEdit()),
    toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
    toggleAll: () => dispatch(TodoActions.toggleAll()),
    clearCompleted: () => dispatch(TodoActions.clearCompleted())
});

class App extends React.Component {
    componentWillMount() {
        this.props.getTodos();
    }

    render() {
        const {
            todos,
            editingId,
            addTodo,
            deleteTodo,
            editTodo,
            saveTodo,
            cancelEdit,
            toggleTodo,
            toggleAll,
            clearCompleted,
            match: {
                params
            }
        } = this.props;

        const filterName = params.filterName || '';

        const activeLength = todos.filter(v => !v.isDone).length;
        const hasCompleted = todos.findIndex(v => v.isDone) >= 0;

        const filteredTodos = !filterName
            ? todos
            : todos.filter(v => (
                (filterName === 'completed' && v.isDone)
                || (filterName === 'active' && !v.isDone)
            ));

        return (
            <div className="todo-app">
                <Header
                    isAllDone={todos.every(v => v.isDone)}
                    addTodo={addTodo}
                    toggleAll={toggleAll}
                />
                <TodoList
                    todos={filteredTodos}
                    editingId={editingId}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    saveTodo={saveTodo}
                    cancelEdit={cancelEdit}
                    toggleTodo={toggleTodo}
                />
                <Footer
                    activeLength={activeLength}
                    clearCompleted={clearCompleted}
                    hasCompleted={hasCompleted}
                    filterName={filterName}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
