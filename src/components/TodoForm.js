/**
 * TodoForm.js - 待办事项输入表单组件
 */

import { useState } from 'react';

/**
 * TodoForm组件
 * 接收一个props: addTodo函数，用于添加新的待办事项
 */
function TodoForm({ addTodo }) {
  // 控制输入框的值
  const [inputValue, setInputValue] = useState('');
  
  // 输入变化处理函数
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // 表单提交处理函数
  const handleSubmit = (e) => {
    // 阻止表单默认提交行为
    e.preventDefault();
    
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      // 调用添加函数并清空输入框
      addTodo(trimmedValue);
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="todo-form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="添加新的待办事项..."
        aria-label="新待办事项输入框"
      />
      
      <button type="submit">添加</button>
    </form>
  );
}

export default TodoForm; 