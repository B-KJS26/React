import react from 'react';
import React, { useState } from 'react';
import './Content.css';
import FirstCard  from './Firstcard';
function Content(){
        return(
        <div className = "wrapper">
            <FirstCard />
            <div className='content'>
                <div className="scale">
                    <img className="Card" alt="Hear" src="img/1dia.png"/>
                </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className='content'>
                <div className="scale">
                    <img className="Card" alt="Spade" src="img/spade.png"/>
                </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className='content'>
                <div className="scale">
                    <img className="Card" alt="Dia" src="img/1heart.png"/>
                </div>            
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className='content'>
                <div className="scale">
                    <img className="Card" alt="Dia" src="img/1clov.png"/>
                </div>
            </div>
        </div>
    )
}
