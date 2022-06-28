import React, { useState } from 'react';
import './Firstcard.css';

function FirstCard() {
    let count = 0;
    function show() {
        count++;
        if(count%2 != 0){
        document.getElementById("holdone").style.display = 'block';}
        else
        document.getElementById("holdone").style.display = 'none';
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "first" onClick={show}>
                            <h1 id="holdone">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
            </div>
    )}

export default FirstCard;