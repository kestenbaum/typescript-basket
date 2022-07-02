import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";

interface headerProps {
    logo: string
}

const Header:FC<headerProps> = (props) => {

    const openBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log('click function: openBasket')
    }

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
                            <div className='header-money'>0</div>
                            <div className='header-currency'>UAH</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;