import React from "react";
import { useAppContext } from "./hooks";
//this component will map over the messages sent through context to display on the board 

function MessageBoard() {
    const { state: { messages } } = useAppContext()
    console.log('messages', messages)

    return(
        <div>
            {
                messages.map(messageItem => {
                    const { id, text, timestamp } = messageItem;

                    return(
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <p>{text}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessageBoard;