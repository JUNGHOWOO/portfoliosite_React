import React from 'react';
import "../App.css";
import Header from '../components/en/header/Header';
import Home from '../components/en/home/Home.jsx';
import Proflie from '../components/en/profile/Profile.jsx';
import Skills from '../components/en/skills/Skills';
import Experience from '../components/en/experience/Experience';
import Timeline from '../components/en/timeline/Timeline';
import Portfolio from '../components/en/work/Portfolio';
/* import Etc from '../components/en/etc/Etc'; */
import Contact from '../components/en/contact/Contact';
import Footer from '../components/en/footer/Footer';
import ScrollUp from '../components/en/scrollup/ScrollUp';
import Changelang from '../components/en/changelang/Changelang';

const English = () => {
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

export default English