import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import Context from '../context';
import PubSub from "../pubsub";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";

const pubsub = new PubSub();

function App() {
  // array consists of reducer state as well as the dispatch method that sends the type of action to the reducer function to perform it's job, updating state
  // import initialState as an object of message key with an empty array value
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log('Received message', message, 'channel', channel)
    
        dispatch(message);
      }
    });    
  }, []);

  // console.log('state', state)

  //wrap the JSX you want access data from with the special Provider component, Context.Provider tag, rather than a main div.  This tag provides an object to all the inner components, passing in the state and dispatch from the useReducer hook (so you can remove props passing via individual components)
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
     <h2>Reaction</h2>
     <hr />
     <PublishMessage />
     <hr />
     <MessageBoard /> 
    </Context.Provider>
  );
}

export default App;
