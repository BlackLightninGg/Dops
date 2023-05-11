import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props

    const navigate = useNavigate()


    const onClickBackHandler=()=> {
        navigate(-1)
    }

    const onClickBackMainPageHandler=()=> {
        navigate('/')
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            
            <button onClick={onClickBackHandler}>Back</button>
            <button onClick={onClickBackMainPageHandler}>Main Page</button>
        </div>
    );
};

