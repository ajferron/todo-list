import React from 'react';
import QueueAnim from 'rc-queue-anim';
import List from '../components/List';
import AddForm from '../components/AddForm';

class Home extends React.Component {
    render() {
        const { todos, show, fns } = this.props

        return (
            <React.Fragment>
                <QueueAnim type={ ['right', 'left'] }
                    duration={ 500 }
                    ease={ ['easeOutQuart', 'easeInOutQuart'] }
                    delay={ show ? 500 : 0 }
                >
                    {show ? [
                        <div key="a">
                            <header> 
                                <h1 id="title"> To Do List </h1>
            
                                <button onClick={ fns.swap }>
                                    <img src="./icons/info.svg" alt="About"/>
                                </button>
                            </header>
                        </div>,
                        <div key="b">
                            <List todos={ todos } complete={ fns.complete } delete={ fns.delete }/>
                            <AddForm addItem={ fns.addItem }/>
                        </div>
                    ] : null}
                </QueueAnim>
            </React.Fragment>
        )
    }
}

export default Home;