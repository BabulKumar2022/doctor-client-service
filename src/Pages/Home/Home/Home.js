import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
          <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;