import React from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {SuperAdidas} from "./Components/SuperAdidas";





function App() {

    const tasks = [
        {id : 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ]

    return (
        <div>
            <SuperButton callBack={()=>{}} color={'red'}>RED SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
            <SuperButton callBack={()=>{}} disabled> DISABLED SUPER BUTTON </SuperButton>


            <SuperAdidas tasks={tasks}/>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
                <input type="password"/>
                <input type="password"/>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
                <div>Info</div>
            </SuperAdidas>
            <SuperAdidas tasks={tasks}>
                <SuperButton callBack={()=>{}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callBack={()=>{}}>SUPER BUTTON</SuperButton>
                <SuperButton callBack={()=>{}} disabled> DISABLED SUPER BUTTON </SuperButton>
                <div>Info</div>
                <div>Info</div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </SuperAdidas>
        </div>
    );
}



export default App;
