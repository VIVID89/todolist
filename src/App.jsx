import { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([
        {
            id: 0,
            title: '리액트를 배워봅시다',
        },
    ]);
    const [title, setTitle] = useState('');

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    };

    const addButtonHandler = () => {
        const getTitle = document.getElementById("title")
        if ( getTitle.value.length ===0) {
            return false
        } else {
            const newList = {
                id: list.length + 1,
                title,
            };
            setList([...list, newList]);
            setTitle('');
        }
        
    };

    return (
        <div>
            <div className="input">
                <input id="title" type="text" value={title} onChange={onTitleHandler}></input>
                <button onClick={addButtonHandler}>추가하기</button>
            </div>
            <div className='title'>
                <h1>Todo List</h1>
            </div>
            <div className='container'>
                {list.map((item) => {
                    return <div key={item.id} className="todoList">{item.title}</div>;
                })}
            </div>
        </div>
    );
}

export default App;
