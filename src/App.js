import React from 'react';
import "./App.css";
import "./loader.css";
import Korea from "./router/Korea";
import English from "./router/English";
import Links from './router/Links.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div class="loader">
                <div class="box">
                    <div class="loader6"></div>
                    <p><Links /></p>
                </div>
                
                <Switch>
                    <Route path="/kr" component={Korea}><Korea /></Route>
                    <Route path="/en" component={English}><English /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App