import React from 'react';
import {TodosType} from "../App";

type SuperButtonPropsType = {
    setTodos:(t:TodosType[])=>void
    todos:TodosType[]
    inputText:string
    setInputText:(t:string)=>void
}
export const SuperButton = (props:SuperButtonPropsType) => {

    const onClickHandler=()=>{
        props.setTodos([{id:props.todos.length+1, userId:props.todos[props.todos.length-1].userId+1, title:props.inputText, completed:false}, ...props.todos])
        props.setInputText('')
    }

    return (
        <button onClick={onClickHandler}>+</button>
    );
};