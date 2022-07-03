import React, { useState } from 'react';
import './fourth.css';

function FourthCard() {
    let count = 0;
    function show() {
        count++;
        if(count%2 != 0){
        document.getElementById("holdfour").style.display = 'block';}
        else
        document.getElementById("holdfour").style.display = 'none';
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "fourth" onClick={show}>
                            <h1 id="holdfour">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
            </div>
    )}

export default FourthCard;