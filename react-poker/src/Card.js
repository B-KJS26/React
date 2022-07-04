import React, { useState } from 'react';
import './Firstcard.css';
import './Secondcard.css';
import './Thirdcard.css';
import './fourth.css';
import './fifthcard.css'

function Card() {
    let allcounting = 0;
    var firstcount = false;
    function show() {
        firstcount = !firstcount;
        if(firstcount) allcounting++;
        else allcounting--;

        if(firstcount){
        document.getElementById("holdone").style.display = 'block';}
        else
        document.getElementById("holdone").style.display = 'none';
    }
    var secount = false;
    function show2() {
        secount = !secount;
        if(secount) allcounting++;
        else allcounting--;
        if(secount){
        document.getElementById("holdsec").style.display = 'block';}
        else
        document.getElementById("holdsec").style.display = 'none';
    }
    var thcount = false;
    function show3() {
        thcount = !thcount; 
        if(thcount) allcounting++;
        else allcounting--;
        if(thcount){
        document.getElementById("holdth").style.display = 'block';}
        else
        document.getElementById("holdth").style.display = 'none';
    }
    var focount = false;
    function show4() {
        focount = !focount;
        if(focount) allcounting++;
        else allcounting--;
        if(focount){
        document.getElementById("holdfour").style.display = 'block';}
        else
        document.getElementById("holdfour").style.display = 'none';
    }
    var ficount = false;
    function show5() {
        ficount = !ficount;
        if(ficount){
        document.getElementById("holdfive").style.display = 'block';}
        else
        document.getElementById("holdfive").style.display = 'none';
    }
    function shuffling() {
        if(allcounting === 1 || allcounting === 0){
            alert('No pair');
        }
        else if(allcounting === 2){
            alert('Two Pair');
        }
        else if(allcounting === 3){
            alert('Three of a kind');
        }
        else
        alert('Four Of A Kind');
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
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "second" onClick={show2}>
                            <h1 id="holdsec">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "third" onClick={show3}>
                            <h1 id="holdth">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "fourth" onClick={show4}>
                            <h1 id="holdfour">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div className = "imgesa" id = "fifth" onClick={show5}>
                            <h1 id="holdfive">Hold</h1>
                        </div>
                    </div>
                </div>
                <br></br>
                <button id='suffled' onClick={shuffling}>Shuffle</button>
            </div>
    )}

export default Card;