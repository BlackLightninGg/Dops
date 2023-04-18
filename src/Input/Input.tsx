import React, {ChangeEvent} from 'react';

type InputPropsType = {
    inputText: string
    setInputText:(t:string)=>void
}
export const Input = (props:InputPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setInputText(e.currentTarget.value)
    }
    return (
        <input type="text" value={props.inputText} onChange={onChangeHandler}/>
    );
};
