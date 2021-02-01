import React, {Component} from 'react';
import "./Features"
import "./Form.css"
class Form extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        title: '',
        content: '',
        heading: '',
        mainContent: '',
        image: '',
      };
    else return this.props.list[this.props.currentIndex];
  }

  handleInputTitle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleInputContent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleInputHeading = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleInputMainContent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        onAddOrEdit={this.onAddOrEdit}
        className="Form"
      >
        <div>
          <input
            name="title"
            placeholder="Feature Title"
            value={this.state.title}
            onChange={this.handleInputTitle}
          />
          <input
            name="content"
            placeholder="Feature content"
            value={this.state.content}
            onChange={this.handleInputContent}
          />
          
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
