import React, { useState } from 'react';
import './fifthcard.css';

function FifthCard() {
    let count = 0;
    function show() {
        count++;
        if(count%2 != 0){
        document.getElementById("holdfive").style.display = 'block';}
        else
        document.getElementById("holdfive").style.display = 'none';
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "fifth" onClick={show}>
                            <h1 id="holdfive">Hold</h1>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
    )}

export default FifthCard;