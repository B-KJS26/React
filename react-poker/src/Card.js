import React, { useState } from 'react';
import './Firstcard.css';
import './Secondcard.css';
import './Thirdcard.css';
import './fourth.css';
import './fifthcard.css'

function Card() {
    let counted = 0;
    let allcounting = 0;
    var firstcount = false;
    let firstcounting = 0;
    let secondcounting = 0;
    let thirdcounting = 0;
    let fourthcounting = 0;
    let fifthcounting = 0;
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
        if(!firstcount){
            if(allcounting%2 === 0){
                firstcounting = 2;
            document.getElementById('first').className = "changed";
            }
            else if(allcounting%2 !== 0){
                firstcounting = 7;    
            document.getElementById('first').className = "joker";
            }
        }
        if(!secount){
            if(allcounting%2 === 0){
                secondcounting = 5;
            document.getElementById('second').className = "changedd";
            }
            else if(allcounting%2 !== 0){   
                secondcounting = 8; 
            document.getElementById('second').className = "eclov";
            }
        }
        if(!thcount){
            if(allcounting%2 === 0){
                thirdcounting = 10;
                document.getElementById('third').className = "theart";
            }
                else if(allcounting%2 !== 0){    
                thirdcounting = 7;
                document.getElementById('third').className = "sdia";
            }
        }
        if(!focount){
            if(allcounting%2 === 0){
                fourthcounting = 6;
                document.getElementById('fourth').className = "fspade";
            }
                else if(allcounting%2 !== 0){    
                fourthcounting = 4;
                document.getElementById('fourth').className = "sixclov";
            }
        }
        if(!ficount){
            if(allcounting%2 === 0){
                fifthcounting = 4;
                document.getElementById('fifth').className = "fclov";
            }
                else if(allcounting%2 !== 0){ 
                fifthcounting = 4;   
                document.getElementById('fifth').className = "fdia";
            }
        }
        if(firstcounting === secondcounting || firstcounting === thirdcounting || firstcounting === fourthcounting || firstcounting === fifthcounting){
            alert('Two pair');
        }
        if(secondcounting === thirdcounting || secondcounting === fourthcounting || secondcounting === thirdcounting){
            alert('Two pair');
        }
        if(thirdcounting === fourthcounting || thirdcounting === fifthcounting){
            alert('Two pair');
        }
        if(fourthcounting === fifthcounting){
            alert('Two pair');
        }
        if((firstcounting === secondcounting && firstcounting === thirdcounting) || (firstcounting === secondcounting && firstcounting === fourthcounting) || (firstcounting === secondcounting && firstcounting === fifthcounting)){
            alert('Three of a Kind');
        }
        if((firstcounting === thirdcounting && firstcounting === fourthcounting) || (firstcounting === thirdcounting && firstcounting === fifthcounting)){
            alert('Three of a Kind');
        }
        if((firstcounting === fourthcounting && firstcounting === fifthcounting)){
            alert('Three of a Kind');
        }
        if(counted === 0){
        alert('Four of a Kind');
        counted++;
        }
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className ="scale">
                        <div class = "imgesaf" id = "first" onClick={show}>
                            <h1 id="holdone">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div class = "imgesas" id = "second" onClick={show2}>
                            <h1 id="holdsec">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div class = "imgesath" id = "third" onClick={show3}>
                            <h1 id="holdth">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div class = "imgesaf" id = "fourth" onClick={show4}>
                            <h1 id="holdfour">Hold</h1>
                        </div>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
                <div className='content'>
                    <div className ="scale">
                        <div class = "imgesafi" id = "fifth" onClick={show5}>
                            <h1 id="holdfive">Hold</h1>
                        </div>
                    </div>
                </div>
                <br></br>
                <button id='suffled' onClick={shuffling}>Shuffle</button>
            </div>
    )}

export default Card;