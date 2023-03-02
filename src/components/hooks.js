//create a custom context hook for reusability
import { useContext } from "react";
import Context from '../context';

export const useAppContext = () => {
    return useContext(Context);
}