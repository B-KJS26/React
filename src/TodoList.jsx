import React, {useState} from 'react';
import './TodoList.css'
export default function TodoList(props){
    var i = '완료';
    var j = '미완료';
    const [now, setNow] = useState(j);
    const [dat, setDat] = useState(props.data.title);
    const onChange = (e) => {
        console.info(e)
        e.target.checked? setNow(i) : setNow(j);
    };

    const onDelete = (f) => {
        f.target.checked? setDat(true) : setDat(false);
    };
    return(
        <div>
            <div className='Todoss'>
                <b className='condition'>{now}</b>
                <b className='Listname'>{dat}</b>
                <button className='deleteB' onChange={onDelete}>삭제하기</button>
                <input type="checkbox" onChange={onChange} style={{
                    width: 100,
                    height: 100
                }}></input>
            </div>
            <br/><br/>
        </div>
    );
}