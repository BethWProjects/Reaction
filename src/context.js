//this file is set up to use the useContext hook, which organizes the passing of props
//think of this as a data storage unit, that we can access

import { createContext } from "react";
//the createContext method creates a Context object 

// const context = createContext();  you can export the 'context' constant, but refactoring to inline allows you to remove this and just export the createContext() right away for cleaner code

export default createContext();

//in App.js import the Context method and then wrap the JSX you want access data from with the special Provider component, Context.Provider

