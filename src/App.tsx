import React, {useEffect, useState} from 'react';
import './App.css';
import {ShowTodosButton} from "./Buttons/ShowTodosButton";
import {HideTodosButton} from "./Buttons/HideTodosButton";
import {SuperButton} from "./Buttons/SuperButton";
import {Input} from "./Input/Input";

export type TodosType = {
    id: number
    userId: number
    title: string
    completed: boolean
}

function App() {



    const [todos, setTodos] = useState<TodosType[]>([])
    const [inputText, setInputText] = useState('')

    function getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        getTodos()
    }, [])

    function hideTodos() {
        setTodos([])
    }


    return (
        <div className="App">
            <div>
                <Input inputText={inputText} setInputText={setInputText}/>
                <SuperButton setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}/>
            </div>
            <div>
                <ShowTodosButton getTodos={getTodos}/>
                <HideTodosButton hideTodos={hideTodos}/>
            </div>
            <ul>
                {todos.map(el => <li key={el.id}>
                    <span>{el.id}</span>
                    <span> _ {el.userId}</span>
                    <span> _ {el.title} </span>
                    <input type="checkbox" checked={el.completed}/>
                </li>)}
            </ul>
        </div>
    );
}

export default App;
