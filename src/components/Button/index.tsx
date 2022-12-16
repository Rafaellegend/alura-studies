import React from "react";
import { JsxElement } from "typescript";
import style from './Button.module.scss';

interface Props {
    children?: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}

function Button({onClick, type, children}: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Button;