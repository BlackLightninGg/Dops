import {ChangeEvent, useCallback, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), []);

    return (
        <div>
            <div>Lags when change value</div>
            {/*<input type="text" value={value} onChange={onChange} />*/}
            <Input/>
            <SlowComponent/>
        </div>
    );
};
