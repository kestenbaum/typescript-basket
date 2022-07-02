import React, {FC} from 'react';
import style from './MyButton.module.css'

interface btnProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

const MyButton:FC<btnProps> = (props) => {
    const {children, ...rest} = props

    return (
        <button
            {...rest}
            className={style.btn}
        >
            {children}
        </button>
    );
};

export default MyButton;