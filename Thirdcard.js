import React, { useState } from 'react';
import './Thirdcard.css';

function ThirdCard() {
    let count = 0;
    function show() {
        count++;
        if(count%2 != 0){
        document.getElementById("holdth").style.display = 'block';}
        else
        document.getElementById("holdth").style.display = 'none';
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "third" onClick={show}>
                            <h1 id="holdth">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
            </div>
    )}

export default ThirdCard;