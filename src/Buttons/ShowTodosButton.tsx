import React from 'react';

type ShowTodosButtonPropsType = {
    getTodos:()=> void
}

export const ShowTodosButton = (props:ShowTodosButtonPropsType) => {
    return (
            <button onClick={props.getTodos}>Show Todos</button>
    );
}