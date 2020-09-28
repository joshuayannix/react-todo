import React from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
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
    const newTodo = {...this.state, id: uuid(), completed: false};
    this.props.addTodo(newTodo);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label htmlFor="text">Text</label>
        <input type="text"
          name='task'
          value={this.state.task}
          onChange = {this.handleChange}
        />
        <button>Add Todo!</button>
      </form>
    )
  }
}

export default NewTodoForm;