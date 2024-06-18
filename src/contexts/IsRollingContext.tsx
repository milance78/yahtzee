
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface IsRollingContextInterface {
    isRolling: boolean;
    setIsRolling: Dispatch<SetStateAction<boolean>>
}
interface IsRollingProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    isRolling: false,
    setIsRolling: (IsRolling: boolean) => {}
} as IsRollingContextInterface

export const IsRollingContext = createContext(defaultValue);

export const useIsRollingContext = () => {
    const isRolling = useContext(IsRollingContext);

    if(isRolling === undefined){
        throw new Error('useIsRollingContext must be used with IsRollingContext')
    }
    return isRolling;
}


// providing context
export const IsRollingContextProvider = ({ children }: IsRollingProviderProps) => {
    const [isRolling, setIsRolling] = useState<boolean>(false);

    return <IsRollingContext.Provider value={{ isRolling, setIsRolling }}>
        {children}
    </IsRollingContext.Provider>
}