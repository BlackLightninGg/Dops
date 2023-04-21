import React from "react";
import s from './SuperButton.module.css'

type  PropsType = {
    callBack: () => void
    name?: string
    color?: string
    disabled? : boolean
    children : React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {callBack, name, color, disabled, children,  ...otherProps} = props
    const onClickHandler = () => {
        callBack()
    }

    const finalClassName = `
    ${s.button}
    ${color==='red'? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    )
}


//-------------------------------------------------------------------------------------------------------------------------------------
// import React from "react";
//
// type  PropsType = {
//     callBack : ()=> void
//     name: string
//     color: string
// }
//
// export const SuperButton: React.FC<PropsType> = ({callBack, name, color, ...otherProps}) => {
//     const onClickHandler = () => {
//         callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     )
// }