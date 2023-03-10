import React, { useState } from "react";
import { useAppContext } from "./hooks";
import { newMessage } from "../state/actions";
//this component will dispatch a new message action object once a user types in new text

function PublishMessage() {
    const { dispatch } = useAppContext()

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    };

    const publishMessage = () => {
        dispatch(newMessage(text));
        setText('')
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') publishMessage()
    }

    return(
        <div>
            <h3>Got something to say</h3>
            <input value={text} onChange={updateText} onKeyDown={handleKeyPress}/>
            {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}

export default PublishMessage;