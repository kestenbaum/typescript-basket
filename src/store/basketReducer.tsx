import {ICard} from "../types/types";
import iphone from './../assets/iphone.jpg'
import iphone12 from './../assets/iphone-12.png'


interface stateInterface {
    data: ICard[]
}

const initialState:stateInterface = {
    data: [
        {
            id: 1,
            title: 'Смартфон Apple iPhone 11',
            img: {iphone},
            price: 15000
        },
        {
            id: 2,
            title: 'Смартфон Apple iPhone 12',
            img: {iphone12},
            price: 25000
        }
    ]
}

interface actionTypes {
    type: string
    payload: any
}

export const basketReducer = (state = initialState, action:actionTypes) => {
    switch (action.type){
        default:
            return state;
    }
}