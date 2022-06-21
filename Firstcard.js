import react from 'react';
import React, { useState } from 'react';
import './Content.css';

import React from 'react'


export default function FirstCard() { 
    constructor(props){
        super(props);
        this.state = {
            images: "img/1clov.png",
        };
    }
    
    ChangeImage = () => {
        count++;
        if(count%2 != 0){
            this.setState({
                images: "img/1dia.png"
            })
        }
        else this.setState({
            images:"img/1clov.png"
        })
    }
    return(
            <div className="wrapper">
                <div className='content'>
                    <div className="scale">
                        <img className="Card" alt="Clov" onClick={this.ChangeImage} src={this.state.images}/>
                        <h1 className = "texts"> Hold
                        </h1>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
    )}
            