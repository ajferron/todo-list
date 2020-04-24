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
                        <div className="header" key="a">
                            <header>
                                <h1>About</h1>

                                <DelayLink delay={500} to={'/'} onDelayStart={fns.swap}>
                                    <button>
                                        <img src="./icons/circle-x.svg" alt="Back"/>
                                    </button>
                                </DelayLink>
                            </header>
                        </div>,
                        <div className="content" key="b">
                            <p>
                                A simple To Do app made with React.js <br/><br/>
                                {/* <a href="https://www.youtube.com/watch?v=sBws8MSXN7A"> React JS Crash Course </a> */}
                            </p>
                            <button id="github" onClick={ () => window.open('https://github.com/af3rr/todo-list', '_blank') }>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.625 11.875C2.5 12.8125 2.5 10.3125 1.25 9.99999M10 13.75V11.3312C10.0234 11.0332 9.98318 10.7336 9.88188 10.4524C9.78059 10.1711 9.62058 9.91463 9.4125 9.69999C11.375 9.48124 13.4375 8.73749 13.4375 5.32499C13.4373 4.45238 13.1017 3.61324 12.5 2.98124C12.7849 2.21781 12.7648 1.37396 12.4437 0.624992C12.4437 0.624992 11.7062 0.406242 10 1.54999C8.5675 1.16176 7.05749 1.16176 5.625 1.54999C3.91875 0.406242 3.18125 0.624992 3.18125 0.624992C2.86023 1.37396 2.84009 2.21781 3.125 2.98124C2.51883 3.61793 2.18283 4.46466 2.1875 5.34374C2.1875 8.73124 4.25 9.47499 6.2125 9.71874C6.00687 9.93122 5.84829 10.1846 5.74707 10.4624C5.64585 10.7403 5.60425 11.0363 5.625 11.3312V13.75" stroke="#2F3542" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                View on GitHub
                            </button>
                        </div>
                    ] : null}
                </QueueAnim>
            </React.Fragment>
        )
    }
}

export default About;