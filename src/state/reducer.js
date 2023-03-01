import { NEW_MESSAGE } from "./types";

export const initialState = { messages: [] };

//create a function that will build an array of message items, based on receiving action objects with the NEW_MESSAGE action type
const reducer = (state, action) => {
    switch(action.type) {
        case NEW_MESSAGE: 
            return { ...state, messages: [...state.messages, action.item]}; 
        default: 
            return state;
    }
}

export default reducer;