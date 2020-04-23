import React from 'react';
import QueueAnim from 'rc-queue-anim';
import DelayLink from '../components/DelayLink';

class About extends React.Component {
    render() {
        const { show, fns } = this.props

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
                                <h1>About</h1>

                                <DelayLink delay={500} to={'/'} onDelayStart={fns.swap}>
                                    <button>
                                        <img src="./icons/circle-x.svg" alt="Back"/>
                                    </button>
                                </DelayLink>
                            </header>
                        </div>,
                        <div key="b">
                            <p>
                                A simple To Do app made with React.js <br/><br/>
                                <a href="https://www.youtube.com/watch?v=sBws8MSXN7A"> React JS Crash Course </a>
                            </p>
                        </div>
                    ] : null}
                </QueueAnim>
            </React.Fragment>
        )
    }
}

export default About;