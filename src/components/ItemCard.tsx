import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import MyImg from "./UI/img/MyImg";
import {ICard} from "../types/types";

interface cardProps {
    props: ICard
}

const ItemCard:FC<cardProps> = (props) => {
    return (
        <div className='card-wrapper'>
            <h2 className='card-title'>{props.props.title}</h2>
            <MyImg
                src={props.props.img}
            />
            <hr className='line-item'/>
            <div className='card-option'>
                <div className='card-price'>Цена: {props.props.price} UAH</div>
                <MyButton
                    style = {{background: 'green'}}
                >
                    Купить
                </MyButton>
            </div>
        </div>
    );
};

export default ItemCard;