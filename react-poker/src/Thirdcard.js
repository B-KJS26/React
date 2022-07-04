import React, { useState } from 'react';
import './Thirdcard.css';

function ThirdCard() {
    var thcount = false;
    function show() {
        thcount = !thcount; 
        if(thcount){
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