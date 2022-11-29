import React from 'react';
import "../App.css";
import Header from '../components/kr/header/Header';
import Home from '../components/kr/home/Home.jsx';
import Proflie from '../components/kr/profile/Profile.jsx';
import Skills from '../components/kr/skills/Skills';
import Experience from '../components/kr/experience/Experience';
import Timeline from '../components/kr/timeline/Timeline';
import Portfolio from '../components/kr/work/Portfolio';
/* import Etc from '../components/kr/etc/Etc'; */
import Contact from '../components/kr/contact/Contact';
import Footer from '../components/kr/footer/Footer';
import ScrollUp from '../components/kr/scrollup/ScrollUp';
import Changelang from '../components/kr/changelang/Changelang';

const Korea = () => {
    return (
        <>
                <Header />
                    <Home />
                        <main className='main'>
                        <Proflie />
                        <Timeline />
                        <Skills />
                        <Portfolio />
                        <Experience />
                        {/* <Etc /> */}
                        <Contact />
                        </main>
                    <Footer />
                <Changelang />
                <ScrollUp />   
        </>
    )
}

export default Korea