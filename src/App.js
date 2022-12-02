import React from 'react';
import "./App.css";
import Korea from "./router/Korea";
import English from "./router/English";
import Main from "./router/Main";
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

const App = () => {

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("body");
        /* when the scroll is higher than 2000 viewport height, add the show scroll-header to a tag withe the header tag  */
        if (this.scrollY >= 600) {
            header.classList.add("scroll-body");
        } else {
            header.classList.remove("scroll-body");
        }
    })

    return (
        <BrowserRouter>
            <Route path="/" component={Main} exact={true}><Main /></Route>
            <Route path="/en" component={English} exact={true}><English /></Route>
            <Route path="/kr" component={Korea} exact={true}><Korea /></Route>
        </BrowserRouter>
    )
}

export default App