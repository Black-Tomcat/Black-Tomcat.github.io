import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

// PAGES
import About from "./containers/about";
import Index from "./containers";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>The Wombat And The Black Tomcat</div>

                    <Route path="/" exact component={Index}/>
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("react-entry"));