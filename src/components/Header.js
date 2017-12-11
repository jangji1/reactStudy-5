import React from 'react';
import ClassNames from 'classnames';

class Header extends React.Component {
    handleKeyDown = e => {
        const text = e.target.value;
        if(!text || e.keyCode !== 13) {
            return;
        }
        this.props.addTodo(text);
        e.target.value = '';
    };

    render() {
        const {
            isAllDone,
            toggleAll
        } = this.props;
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    placeholder="What needs to be done"
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    className={ClassNames('toggle-all', {
                        checked: isAllDone
                    })}
                    onClick={toggleAll}
                />
            </header>
        );
    }
}

export default Header;


/*
1. 선언될 때마다 this 바인딩
onKeyDown={this.handler.bind(this)}

2. 생성자메소드 내부에서 덮어씌우기
constructor() {
    this.handler = this.handler.bind(this);
}

3. 애로우펑션으로 호출
onKeyDown={e => this.handler(e) }

4. 애로우펑션으로 정의 (class property 선언방식(proposal-2))
handler = e => { };
*/
