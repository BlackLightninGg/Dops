import React, {ChangeEvent, ReactChildren, ReactNode, useCallback, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

type ContainerType = {
    children : ReactNode
}

 const Container = ({children} : ContainerType) => {
     console.log("Container")

     const [value, setValue] = useState('');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), []);

    return (
        <div>
            <div>Lags when change value</div>
            {/*<input type="text" value={value} onChange={onChange} />*/}
            <Input/>
            {children}
        </div>
    );
};

export const Task_3WithChildren = () => {
    console.log("Task_3WithChildren")
    return (
        <Container>
            <SlowComponent/>
        </Container>
    )
}
