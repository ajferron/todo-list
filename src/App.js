import React from 'react'
import {v4 as uuid} from 'uuid'
import About from './pages/About'
import Home from './pages/Home'
import './App.css';

class App extends React.Component {
    state = {
        home: true,
        about: false,
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

    swap = () => { 
        this.setState({
            home: !this.state.home,
            about: !this.state.about,
        })
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
        const item = {
            id: uuid(),
            title, // Works becase key == value
            completed: false
        }

        this.setState({todos: [...this.state.todos, item]})
    }

    render() {
        const fns = {
            swap: this.swap,
            complete: this.complete,
            delete: this.delete,
            addItem: this.addItem
        }

        return (
            <div className="App">
                <div className="wrapper" style={ this.wrapperStyle() }>
                    <Home show={this.state.home} todos={this.state.todos} fns={fns}/>
                    <About show={this.state.about} fns={fns}/>
                </div>
            </div>
        );
    }
}

export default App;
