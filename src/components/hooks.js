//only components will be using this hook, so it's ok to place it in the components folder
//create a custom context hook for reusability, to avoid passing as props (potentially multiple times)
import { useContext } from "react";
import Context from '../context';

//create and export a new function that returns the useContext method that passes in the Context object
export const useAppContext = () => {
    return useContext(Context);
}