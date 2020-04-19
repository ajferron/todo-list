import React from 'react';

class AddForm extends React.Component {
    state = {
        title: ''
    }
    
    // Works if there were multiple input fields
    input = (e) => this.setState({ [e.target.name]: e.target.value })

    addItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form id="add-form" onSubmit={this.addItem}>
                <button type="submit" value="submit">
                    <img src="./add.svg" alt="add"/>
                </button>
                <input 
                  type="text" 
                  name="title" 
                  placeholder="Add To Do..."
                  value={this.state.title}
                  onChange={this.input}
                />
            </form>
        )
    }
}

export default AddForm;