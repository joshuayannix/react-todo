import React from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {...this.state, id: uuid()};
    this.props.addTodo(newTodo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="text">Text</label>
        <input type="text"
          name='todo'
          value={this.state.todo}
          onChange = {this.handleChange}
        />
        <button>Add Todo!</button>
      </form>
    )
  }
}

export default NewTodoForm;