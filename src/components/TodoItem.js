/**
 * TodoItem.js - 单个待办事项组件
 */

/**
 * 显示单个待办事项，提供完成状态切换和删除功能
 */
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* 左侧: 内容区域 */}
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          aria-label={`标记"${todo.text}"为${todo.completed ? '未完成' : '已完成'}`}
        />
        
        <span className="todo-text">{todo.text}</span>
      </div>
      
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
        aria-label={`删除待办事项"${todo.text}"`}
      >
        删除
      </button>
    </div>
  );
}

export default TodoItem; 