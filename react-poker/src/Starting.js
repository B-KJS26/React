import React, {useState} from 'react';
import './Starting.css';
import './Money.css'
import './Mymoney.css'
function Starting() {
    const [Moneye, setMoneye] = useState(0);
    const onDecrease = () => {
        setMoneye(
            Moneye - 10
        );
    }
    return(
        <div className='buttonman'>
            <br/>
            <br/>
            <button id='startt' onClick={onDecrease}>Start!</button>
            <div className="footer">
                <div className="nowing">
                    <h1 id='michin'>BET</h1>
                    <h2 id='dorat'>$ 10</h2>
                </div>
            </div>
            <div className="footer2">
                <div className="nowing">
                    <h1 id='michin1'>My Money</h1>
                    <h2 id='dorate'>$ {Moneye}</h2>
                </div>
            </div>
        </div>
        
    )
}

export default Starting;