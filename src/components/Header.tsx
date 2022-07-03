import React, {FC, useMemo, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import {useTypedSelector} from "../hooks/useTypedSelector";
import MyModal from "./UI/modal/MyModal";


interface headerProps {
    logo: string
}

const Header:FC<headerProps> = (props) => {
    const state = useTypedSelector(item => item.basket.basket)
    const [modal, setModal] = useState<boolean>(false)
    const openBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setModal(true)
    }

    const allPrice = useMemo(() => {
        return state.reduce((total:any, i:any) => {
            return total + i.props.price
        }, 0)
    }, [state])

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-logo'>{props.logo}</div>
                    <div className='header-option'>

                        <MyButton
                            onClick={openBasket}
                        >
                            Корзина
                        </MyButton>

                        <div className='header-basket'>
                            <div className='header-money'>{allPrice}</div>
                            <div className='header-currency'>UAH</div>
                        </div>

                    </div>
                </div>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
                asdsad
            </MyModal>
        </div>
    );
};

export default Header;