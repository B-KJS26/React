import React, {useState} from 'react';
import './TodoInput.css'
import TodoList from './TodoList';

export default function TodoInput(){
    const [text, setText] = useState('');
    const [todo, setTodo] =useState([]);
    function addList() {
        setTodo([...todo, {
            title: text,
            isDone: false
        }])
    }
    return(
        <div style={{
            padding: 20,
        }}>
            <h1>TODO</h1>
            <input id="inputText" type="text" onChange={(e) => setText(e.target.value)}></input><br/><br/>
            <input type="button" style={{
                background: 'rgba(51, 200, 255)',
                color: 'white',
                outline: 0,
                border: 0,
                borderRadius: '0.35em',
                width: 180,
                height: 30,
            }} value="추가하기" onClick={addList}></input><br/><br/>
            <h1>TODO LIST</h1>
            {todo.map((item) => <TodoList data={item} />)}
        </div>
    )
}