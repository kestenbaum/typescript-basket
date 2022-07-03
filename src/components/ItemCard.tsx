import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import MyImg from "./UI/img/MyImg";
import {ICard} from "../types/types";
import {useDispatch} from "react-redux";
import {addItemAction} from "../store/reducers/basketReducer";

interface cardProps {
    props: ICard
}

const ItemCard:FC<cardProps> = (props) => {
    const dispatch = useDispatch()
    const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addItemAction(props))
    }

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
                    onClick = {addToBasket}
                >
                    Купить
                </MyButton>
            </div>
        </div>
    );
};

export default ItemCard;