import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Link} from "react-router-dom";
import RouterPath from "./Router";

function Example() {
    return (
        <HashRouter>
            <div className="container">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/home'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/create'}>Create</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{marginTop: '100px'}}><RouterPath/></div>
            </div>
        </HashRouter>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
