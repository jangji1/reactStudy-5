import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        const {
            todos,
            editingId,
            deleteTodo,
            editTodo,
            saveTodo,
            cancelEdit,
            toggleTodo
        } = this.props;

        const todoList = todos.map(({ id, text, isDone, isTemporal }) => (
            <Todo
                key={id}
                text={text}
                isDone={isDone}
                isTemporal={isTemporal}
                isEditing={editingId === id}
                editTodo={()=> editTodo(id)}
                deleteTodo={() => deleteTodo(id)}
                saveTodo={text => saveTodo(id, text)}
                cancelEdit={cancelEdit}
                toggleTodo={() => toggleTodo(id)}
            />
        ));

        return (
            <div className="todo-app__main">
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;
