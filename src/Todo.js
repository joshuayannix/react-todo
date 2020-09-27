import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
    console.log('from handleDeleteTodo')
    console.log(this.props.id)
  }
  render() {
    return(
      <div>
        {this.props.todo}
        <button>Edit</button>
        <button onClick={this.handleDeleteTodo}>Delete</button>
      </div>
    )
  }
}

export default Todo;