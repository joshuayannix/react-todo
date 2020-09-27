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
  }

  addTodo(todo) {
    this.setState(st => ({
      todos: [...st.todos, todo]
    }));
  };

  render() {
    return (
      <div>
        <NewTodoForm
          addTodo={this.addTodo}
        />
        {this.state.todos.map(todo => (
          <Todo 
            key={todo.id}
            todo={todo.todo}
          />
        ))}
      </div>
    )
  }
}

export default TodoList;