import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    const { todos, Edit, Delete } = props;

    return (
        <ul className="list-group">
            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} Edit={Edit} Delete={Delete} />
            ))}
        </ul>

    );
}

export default TodoList;