import React from 'react';


const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
return (
<div>
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleTodo(todo.id)}
/>
<span>
{todo.text}
</span>
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</div>
);
};


export default TodoItem;
