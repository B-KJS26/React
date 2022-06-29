import React, { useState } from 'react';
import './Secondcard.css';

function SecondCard() {
    let count = 0;
    function show() {
        count++;
        if(count%2 != 0){
        document.getElementById("holdsec").style.display = 'block';}
        else
        document.getElementById("holdsec").style.display = 'none';
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "second" onClick={show}>
                            <h1 id="holdsec">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
            </div>
    )}

export default SecondCard;