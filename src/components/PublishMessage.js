import React, { useState } from "react";
import { useAppContext } from "./hooks";
//useAppContext will access the context data from the entire app
import { newMessage } from "../state/actions";
//this component will dispatch a new message action object once a user types in new text

function PublishMessage() {
    const { dispatch } = useAppContext()

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    };

    //we need the dispatch function, so import PublishMessage component to App.js and pass in props of dispatch to pass down to this component from App
    //refactored code: use the Context.Provider to wrap the JSX in App to pass props overall, rather than passing through individual components. 
    //pass in newMessage with state text as parameter to dispatch function
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