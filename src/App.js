import React from 'react';
import "./App.css";
import Korea from "./router/Korea";
import English from "./router/English";
import Links from './router/Links.js';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Links />
                <Switch> 
                    <Route path="/kr" component={Korea}><Korea /></Route>
                    <Route path="/en" component={English}><English /></Route>
                </Switch> 
        </BrowserRouter>
    )
}

export default App