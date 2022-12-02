import React from 'react';
import "./main.scss";
import jQuery from 'jquery';
import Korea from "./Korea";
import English from "./English";
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

const Main = () => {
    jQuery(document).ready(function ($) {
        // Define a blank array for the effect positions. This will be populated based on width of the title.
        var bArray = [];
        // Define a size array, this will be used to vary bubble sizes
        var sArray = [4, 6, 8, 10];

        // Push the header width values to bArray
        for (var i = 0; i < $('.bubbles').width(); i++) {
            bArray.push(i);
        }

        // Function to select random array element
        // Used within the setInterval a few times
        function randomValue(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        // setInterval function used to create new bubble every 350 milliseconds
        setInterval(function () {

            // Get a random size, defined as variable so it can be used for both width and height
            var size = randomValue(sArray);
            // New bubble appeneded to div with it's size and left position being set inline
            // Left value is set through getting a random value from bArray
            $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

            // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
            // Callback function used to remove finsihed animations from the page
            $('.individual-bubble').animate({
                'bottom': '100%',
                'opacity': '-=0.7'
            }, 3000, function () {
                $(this).remove()
            }
            );
        }, 350);

    });

    return (
        <>
            <div class="wrapper">
                <div className="center-outer">
                    <div className="center-inner">
                        <div className='bubbles'>
                            <div class="letters">
                                <span class="letter">P</span>
                                <span class="letter">O</span>
                                <span class="letter">R</span>
                                <span class="letter">T</span>
                                <span class="letter">F</span>
                                <span class="letter">O</span>
                                <span class="letter">L</span>
                                <span class="letter">I</span>
                                <span class="letter">O</span><br />
                                <span class="letter">b</span>
                                <span class="letter">y</span>
                                <span class="letter">.</span>
                                <span class="letter">W</span>
                                <span class="letter">O</span>
                                <span class="letter">O</span>
                            </div>
                        </div>
                        <br />
                        <div class="buttons">
                            <Link to="/en">
                                <button class="blob-btn">
                                    <li>
                                        english
                                    </li>
                                    <span class="blob-btn__inner">
                                        <span class="blob-btn__blobs">
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                        </span>
                                    </span>
                                </button>
                            </Link>
                            <br />
                            <Link to="/kr">
                                <button class="blob-btn">
                                    <li>
                                        koeran
                                    </li>
                                    <span class="blob-btn__inner">
                                        <span class="blob-btn__blobs">
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                            <span class="blob-btn__blob"></span>
                                        </span>
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                        <div class="svg-wrapper">

                            <Route path="/en" component={English} exact={true}><English /></Route>
                            <Route path="/kr" component={Korea} exact={true}><Korea /></Route>
                        </div>
                    </div>

                </div>
                <div className="footer"></div>
            </div>

        </>
    )
}

export default Main

