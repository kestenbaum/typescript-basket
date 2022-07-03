import {ICard} from "../../types/types";

interface typesAction {
    type: string
    payload: any
}
interface stateProps {
    basket: ICard | any
}

const initialState:stateProps= {
    basket: []
}

export const basketReducer = (state = initialState, action:typesAction) => {
    switch (action.type){
        case "ADD_ITEM":
            return {...state, basket: [...state.basket, action.payload]}
        default:
            return state
    }
}

export const addItemAction = (payload:any) => ({type: "ADD_ITEM", payload})