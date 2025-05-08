/**
 * TodoFilter.js - 待办事项筛选组件
 */

/**
 * 提供筛选功能和显示当前筛选状态
 */
function TodoFilter({ filter, setFilter, todosCount }) {
  // 筛选选项配置
  const filterOptions = [
    { value: 'all', label: '全部' },
    { value: 'active', label: '未完成' },
    { value: 'completed', label: '已完成' }
  ];
  
  return (
    <div className="filter-container">
      {filterOptions.map(option => {
        // 获取当前类别的任务数量
        const count = todosCount?.[option.value] || 0;
        
        return (
          <button
            key={option.value}
            className={`filter-btn ${filter === option.value ? 'active' : ''}`}
            onClick={() => setFilter(option.value)}
            aria-pressed={filter === option.value}
            aria-label={`显示${option.label}的待办事项`}
          >
            {option.label} <span className="todo-count">({count})</span>
          </button>
        );
      })}
    </div>
  );
}

export default TodoFilter; 