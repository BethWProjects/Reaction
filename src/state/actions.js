import { NEW_MESSAGE } from "./types";
import uuid from 'uuid'

//set up action creators to create a new message action (this helps to reduce writing functions within components)
//it's point is to return an action object
export const newMessage = (text) => ({  //implicitly returning the object by wrapping in parenthesis
    type: NEW_MESSAGE, 
    item: { id: uuid(), text, timestamp: Datenow(), }
});
