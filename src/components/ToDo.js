import React from 'react';
import PropTypes from 'prop-types';

class ToDo extends React.Component {
    rowStyle = () => {
        return {
            // No hyphens. Use camel case
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: 'solid 1px #CED1D9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }

    wrpStyle = () => {
        return {
            display: 'flex',
            alignItems: 'center',
        }
    }

    inStyle = () => {
        return { marginRight: '10px' }
    }

    render() {
        const { id, title, completed } = this.props.todo
        
        return (
            <div className="row" style={ this.rowStyle() }>
                <div className="wrapper" style={ this.wrpStyle() }>
                    <input type="checkbox" style={ this.inStyle() } onChange={ this.props.complete.bind(this, id) } checked={completed} /> 
                    <p> {title} </p>
                </div>

                <button className="del-btn" onClick={ this.props.delete.bind(this, id) }>
                    <img src="./icons/x.svg" alt="close"></img>
                </button>
            </div>
        );
    }
}

export default ToDo;

ToDo.propTypes = {
    todo: PropTypes.object.isRequired,
}