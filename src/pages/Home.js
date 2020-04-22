import React from 'react';
import QueueAnim from 'rc-queue-anim';
import List from '../components/List';
import AddForm from '../components/AddForm';
import DelayLink from '../components/DelayLink';

class Home extends React.Component {
    render() {
        const { todos, show, fns } = this.props

        return (
            <React.Fragment>
                <QueueAnim type={ ['right', 'left'] }
                    duration={ 500 }
                    ease={ ['easeOutQuart', 'easeInOutQuart'] }
                    delay={ show ? 100 : 0 }
                >
                    {show ? [
                        <div key="a">
                            <header> 
                                <h1 id="title"> To Do List </h1>
                
                                <DelayLink delay={500} to={'/About'} onDelayStart={fns.swap}>
                                    <button>
                                        <img src="./icons/info.svg" alt="About"/>
                                    </button>
                                </DelayLink>
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