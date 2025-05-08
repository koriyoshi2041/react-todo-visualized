/**
 * TodoList.js - 待办事项列表组件
 */

import TodoItem from './TodoItem';

/**
 * TodoList组件
 * 渲染待办事项列表，处理空列表情况
 */
function TodoList({ todos, toggleTodo, deleteTodo }) {
  // 处理空列表情况
  if (todos.length === 0) {
    return (
      <div className="empty-list">
        <p>没有待办事项，请添加新的待办事项！</p>
      </div>
    );
  }
  
  // 渲染待办事项列表
  return (
    <div className="todo-list-container">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList; 