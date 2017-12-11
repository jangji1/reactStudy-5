import React from 'react';
import ClassNames from 'classnames';

class Todo extends React.Component {
    componentDidUpdate(prevProps) {
        if(this.props.isEditing && !prevProps.isEditing) {
            this._inputDom.focus();
            this._inputDom.value = this.props.text;
        }
    }

    handleKeyDown(e) {
        const text = e.target.value;
        if(!text || e.keyCode !== 13) {
            return;
        }
        this.props.saveTodo(text);
        // e.target.value = '';
    }

    render() {
        const {
            text,
            isEditing,
            isDone,
            isTemporal,
            editTodo,
            deleteTodo,
            cancelEdit,
            toggleTodo
        } = this.props;
        return (
            <li className={ClassNames('todo-item', {
                editing: isEditing,
                completed: isDone,
                temporal: isTemporal
            })}>
                <button
                    className="toggle"
                    onClick={toggleTodo}
                />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input
                    type="text"
                    ref={ref => {
                        this._inputDom = ref;
                    }}
                    className="todo-item__edit"
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEdit}
                />
            </li>
        );
    }
}

export default Todo;
