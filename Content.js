
import React, { useState } from 'react';
import './Content.css';
import FifthCard from './Fifthcard';
import FirstCard  from './Firstcard';
import FourthCard from './Fourthcard';
import SecondCard from './Secondcard';
import ThirdCard from './Thirdcard';
function Content(){
        return(
        <div className = "wrapper">
            <FirstCard />
            <SecondCard />
            <ThirdCard />
            <FourthCard />
            <FifthCard />
        </div>
    )
}
export default Content;