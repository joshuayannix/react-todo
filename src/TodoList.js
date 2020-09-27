import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todo) {
    this.setState(st => ({
      todos: [...st.todos, todo]
    }));
  };

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.id !== id
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <h2>A simple To Do list created with React</h2>
        {this.state.todos.map(todo => (
          <Todo 
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            deleteTodo={this.deleteTodo}
          />
        ))}
        <NewTodoForm
          addTodo={this.addTodo}
        />
        
      </div>
    )
  }
}

export default TodoList;