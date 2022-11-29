import React, { BrowserRouter, Switch, useHistory } from 'react-router-dom'
import "./changelang.css";

const Changelang = () => {
    const history = useHistory();
    return (
        <BrowserRouter>
            <div className="changelang">
                    <i onClick={() => history.push('/kr')} className="uil uil-language changelang__icon"></i>
                </div>
        </BrowserRouter>
    )
}

export default Changelang