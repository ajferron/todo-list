import React from 'react';
import {Link} from 'react-router-dom';
import List from '../components/List';
import AddForm from '../components/AddForm';

class Home extends React.Component {
    render() {
        const { todos, fns } = this.props

        return (
            <React.Fragment>
                <header> 
                    <h1 id="title"> To Do List </h1>

                    <button>
                        <Link to="/About">
                            <img src="./icons/info.svg" alt="About"/>
                        </Link>
                    </button>
                </header>
                
                <List todos={ todos } complete={ fns.complete } delete={ fns.delete }/>
                <AddForm addItem={ fns.addItem }/>
            </React.Fragment>
        )
    }
}

export default Home;