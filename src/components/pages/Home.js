import React from 'react';
import '../../App.css';
import Jumbotron from '../Jumbotron';
import WelcomeSection from '../WelcomeSection';
import ThreeColumnSection from '../ThreeColumnSection';
import Watch from '../Watch';

function Home() {
    return (
        <>
            <Jumbotron />
            <WelcomeSection />
            <ThreeColumnSection />
            <Watch />
        </>
    )
}

export default Home;
