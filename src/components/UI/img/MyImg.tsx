import React, {FC} from 'react';
import style from './MyImg.module.css'

interface imgProps extends React.ImgHTMLAttributes<HTMLElement>{
    props?: any
}

const MyImg:FC<imgProps> = ({...props}) => {
    return (
        <img
            className={style.img}
            {...props}
        />
    );
};

export default MyImg;