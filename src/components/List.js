import React from 'react';
import ToDo from './ToDo';
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <ToDo key={todo.id} todo={todo} complete={this.props.complete} delete={ this.props.delete }/>
        ));
    }
}

export default List;

List.propTypes = {
    todos: PropTypes.array.isRequired
}