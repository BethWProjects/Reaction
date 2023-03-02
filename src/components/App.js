import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
// import { newMessage } from '../state/actions'
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";


function App() {
  // array consists of reducer state as well as the dispatch method that sends the type of action to the reducer function to perform it's job, updating state
  // import initialState as an object of message key with an empty array value
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state)

  return (
    <div>
     <h2>Reaction</h2>
     <hr />
     <PublishMessage dispatch={dispatch}/>
     <hr />
     <MessageBoard messages={state.messages}/> 
    </div>
  );
}

export default App;
