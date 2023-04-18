import React from 'react';

type HideTodosButtonPropsType = {
    hideTodos:()=> void
}

export const HideTodosButton = (props:HideTodosButtonPropsType) => {
    return (
            <button onClick={props.hideTodos}>Hide Todos</button>
    );
}