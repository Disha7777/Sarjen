import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingId: null,
      editText: '',
      filter: 'all' // all, active, completed
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('todoTasks', JSON.stringify(this.state.tasks));
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim() === '') return;

    const newTaskObj = {
      id: Date.now(),
      text: this.state.newTask,
      completed: false,
      createdAt: new Date().toLocaleString()
    };

    this.setState({
      tasks: [...this.state.tasks, newTaskObj],
      newTask: ''
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  };

  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    });
  };

  startEditing = (id, text) => {
    this.setState({
      editingId: id,
      editText: text
    });
  };

  updateTask = (id) => {
    if (this.state.editText.trim() === '') return;

    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id ? { ...task, text: this.state.editText } : task
      ),
      editingId: null,
      editText: ''
    });
  };

  cancelEditing = () => {
    this.setState({
      editingId: null,
      editText: ''
    });
  };

  setFilter = (filterType) => {
    this.setState({ filter: filterType });
  };

  getFilteredTasks = () => {
    const { tasks, filter } = this.state;
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  render() {
    const { newTask, editingId, editText, filter, tasks } = this.state;
    const filteredTasks = this.getFilteredTasks();
    const activeCount = tasks.filter(task => !task.completed).length;
    const completedCount = tasks.filter(task => task.completed).length;

    return (
      <div className="todo-container">
        <h2 className="todo-title">📝 Todo List Manager</h2>
        
        <form className="todo-form" onSubmit={this.addTask}>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="btn-add">Add Task</button>
        </form>

        <div className="todo-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => this.setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => this.setFilter('active')}
          >
            Active ({activeCount})
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => this.setFilter('completed')}
          >
            Completed ({completedCount})
          </button>
        </div>

        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <p className="no-tasks">No tasks found! Add a new task above.</p>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                {editingId === task.id ? (
                  <div className="task-edit">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => this.setState({ editText: e.target.value })}
                      className="edit-input"
                      autoFocus
                    />
                    <div className="edit-actions">
                      <button onClick={() => this.updateTask(task.id)} className="btn-save">Save</button>
                      <button onClick={this.cancelEditing} className="btn-cancel">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="task-content">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => this.toggleComplete(task.id)}
                        className="task-checkbox"
                      />
                      <div className="task-details">
                        <span className="task-text">{task.text}</span>
                        <small className="task-date">Created: {task.createdAt}</small>
                      </div>
                    </div>
                    <div className="task-actions">
                      <button onClick={() => this.startEditing(task.id, task.text)} className="btn-edit">Edit</button>
                      <button onClick={() => this.deleteTask(task.id)} className="btn-delete">Delete</button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Todo;