import React from 'react';

type ArrayPropsType ={
    id: number
    title: string
    isDone:boolean
}

type PropsType = {
    tasks: ArrayPropsType[]
    children?: React.ReactNode
}


export const SuperAdidas: React.FC<PropsType> = ({tasks, children}) => {


    return (
        <div>
         <ul>
             {tasks.map(t => {
             return(
                 <li key={t.id}>
                     <span>{t.id}</span>
                     <span>{t.title}</span>
                     <input type="checkbox" checked={t.isDone}/>
                 </li>
             )
             })}
         </ul>
            <div>{children}</div>
            <hr/>
        </div>
    );
};
