import React, { useState } from 'react';
import './Content.css';

function FirstCard() {
    function show() {
        document.getElementsById("firstc").style.display = "block";
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "firstc" onClick = {show()}>
                            <h1 id="holding">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
            </div>
    )}

export default FirstCard;
