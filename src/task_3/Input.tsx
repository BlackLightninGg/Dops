import {ChangeEvent, useCallback, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

export const Input = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), []);


    return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
