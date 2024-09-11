
import React from 'react'



import Head from '../component/Head';
import Services from '../component/Services';
import Feature from '../component/Feature';
import Aproduct from '../component/Aproduct';
import Contactus from '../component/Contactus';
import About from './About';

const Home = () => {
    return (
        <div>

            <Head />
            <Services />
            <Feature />
            <Aproduct />
            <About />
            <Contactus />

        </div>
    )
}

export default Home