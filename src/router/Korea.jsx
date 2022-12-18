import React, { Route, BrowserRouter, useHistory, Link } from 'react';
import "../App.css";
import Header from '../components/kr/header/Header';
import Home from '../components/kr/home/Home.jsx';
import Proflie from '../components/kr/profile/Profile.jsx';
import Skills from '../components/kr/skills/Skills';
import Experience from '../components/kr/experience/Experience';
import Timeline from '../components/kr/timeline/Timeline';
import Portfolio from '../components/kr/work/Work';
import Etc from '../components/kr/etc/Etc';
import Contact from '../components/kr/contact/Contact';
import Footer from '../components/kr/footer/Footer';
import ScrollUp from '../components/kr/scrollup/ScrollUp';
import Changelang from '../components/kr/changelang/Changelang';
import Animation from '../components/kr/animation/Animation';
import ppKr from "./ppkr"

const Korea = () => {
    return (
        <>
            <Header />
            <Animation />
            <Home />
            <main className='main'>
                <Proflie />
                <Timeline />
                <Skills />
                <Portfolio />
                {/* <div class="buttons">
                    <Link to="/kr/portfolio&detail">
                        <button class="blob-btn">
                            <li>
                                포트폴리오 자세히 보기
                            </li>
                        </button>
                    </Link>
                </div>
                <div className='detail'>
                    <Route path="/kr/portfolio&detail" component={ppKr} exact={true}><ppKr /></Route>
                </div> */}
                <Experience />
                <Etc />
                <Contact />
            </main>
            <Footer />
            <Changelang />
            <ScrollUp />
        </>
    )
}

export default Korea