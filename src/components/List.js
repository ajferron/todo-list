import React from 'react';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

class List extends React.Component {
    render() {
        return (
            <QueueAnim type={['right', 'left']} leaveReverse>
                {this.props.todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} complete={this.props.complete} delete={ this.props.delete }/>
                ))}
            </QueueAnim>
        );
    }
}

export default List;

List.propTypes = {
    todos: PropTypes.array.isRequired
}