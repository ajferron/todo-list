import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import List from './components/List';
import AddForm from './components/AddForm';
import About from './components/About'
import './App.css';

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: "Take out the trash",
                completed: false
            },
            {
                id: uuid(),
                title: "Finish Homework",
                completed: false
            },
            {
                id: uuid(),
                title: "Feed goldfish",
                completed: false
            }
        ]
    }

    wrapperStyle = () => {
        return {
            position: 'absolute',
            width: '50%',
            height: '75%',
            minWidth: '500px', 
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    complete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) 
                todo.completed = !todo.completed

            return todo
        })})
    }

    delete = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id )})
    }

    addItem = (title) => {
        const newItem = {
            id: uuid(),
            title, // Works becase key == value
            completed: false
        }
        this.setState({todos: [...this.state.todos, newItem]})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="wrapper" style={ this.wrapperStyle() }>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <header> 
                                    <h1 id="title">To Do List</h1>
                                    <button>
                                        <Link to="/About">
                                            <img src="./icons/info.svg" alt="About"/>
                                        </Link>
                                    </button>
                                </header>
                                <List todos={ this.state.todos } complete={ this.complete } delete={ this.delete }/>
                                <AddForm addItem={ this.addItem }/>
                            </React.Fragment>
                        )} />

                        <Route path="/About" component={ About }/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
