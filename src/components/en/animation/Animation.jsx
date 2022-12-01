import React from 'react';
import "./animation.css";
import ScrollDown from './scrollDown';

const Animation = () => {

    return (
        <div className='animation'>
        <div class="ani__container">
            <svg viewBox="0 0 1200 300" className='ani__svg'>
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="60%">JUNGHOWOO</text>
                </symbol>
                <g class="g-ants">
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                    <use xlinkHref="#s-text" class="text-copy"></use>
                </g>
            </svg>
        </div>
        <ScrollDown />
        </div>
    )
}

export default Animation