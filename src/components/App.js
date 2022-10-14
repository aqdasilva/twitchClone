import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom"; 

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/pagetwo">Transport towards the 2nd page</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <button>Click me one time baby !</button>
            <Link to="/">Back to home base</Link>
        </div>
    );
};

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;