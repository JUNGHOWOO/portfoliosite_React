import React from 'react';
import "./App.css";
import Korea from "./router/Korea";
import English from "./router/English";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => {

    window.addEventListener("scroll", function() {
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
                <Switch>
                    <Route path="/en" component={English}><English /></Route>
                    <Route path="/kr" component={Korea}><Korea /></Route>
                </Switch>
        </BrowserRouter>
    )
}

export default App