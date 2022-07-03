import React, {FC} from 'react';
import style from './MyModal.module.css'

interface IModal {
    children?: React.ReactNode
    visible: boolean
    setVisible: any
}

const MyModal:FC<IModal> = (props) => {
    const {children, visible, setVisible} = props
    const rootClasses = [style.modal]

    if (visible){
       rootClasses.push(style.active)
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={style.modalWrapper}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;