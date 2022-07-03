import React, {FC} from 'react';
import ItemCard from "./ItemCard";
import {useTypedSelector} from "../hooks/useTypedSelector";

const ItemList:FC = () => {

    const state = useTypedSelector(item => item.data.data)

    return (
        <div className='item-list'>
            <div className='container'>
                <div className='list-wrapper'>
                    {state.map(item =>
                        <ItemCard
                            key={item.id}
                            props={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemList;