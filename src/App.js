/**
 * App.js - 待办事项应用主组件
 */

import { useState, useEffect } from 'react';
import './App.css';

// 导入所有子组件
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  // 存储所有待办事项的数组
  const [todos, setTodos] = useState([]);
  
  // 当前筛选条件: 'all', 'active', 'completed'
  const [filter, setFilter] = useState('all');
  
  // 初始加载数据
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  // 数据持久化
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // 添加新待办事项
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
  };
  
  // 切换待办事项的完成状态
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // 删除待办事项
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // 根据筛选条件过滤待办事项
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' 筛选条件下返回所有待办事项
  });

  // 主渲染函数
  return (
    <div className="app-container">
      <header>
        <h1>待办事项</h1>
        <p className="app-description">管理您的任务</p>
      </header>
      
      <main>
        {/* 添加新待办表单组件 */}
        <TodoForm addTodo={addTodo} />
        
        {/* 筛选控制组件 */}
        <TodoFilter 
          filter={filter} 
          setFilter={setFilter} 
          todosCount={{
            all: todos.length,
            active: todos.filter(todo => !todo.completed).length,
            completed: todos.filter(todo => todo.completed).length
          }}
        />
        
        {/* 待办列表组件 */}
        <TodoList 
          todos={filteredTodos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} 待办事项应用</p>
      </footer>
    </div>
  );
}

export default App;
