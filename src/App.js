import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "./state/reducer";
import { newMessage } from './state/actions'


function App() {
  // array consists of reducer state as well as the dispatch method that sends the type of action to the reducer function to perform it's job, updating state
  // import initialState as an object of message key with an empty array value
  const [state, dispatch] = useReducer(reducer, initialState);

  //for debuggin purposes, set up a useEffect hook to check the messages coming through.  This takes in a callback function to fire every single render, (or what it's set to) with the setInterval method.  within the setInterval method we have a callback function that calls a dispatch, calling a newMessage action creator
  useEffect(() => {
    setInterval(
      () => dispatch(newMessage('foo')),
      10000
      );
  }, []);

  console.log('state', state)

  return (
    <div>
     <h2>Reaction</h2>
    </div>
  );
}

export default App;
