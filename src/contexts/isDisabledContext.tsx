
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface IsDisabledContextInterface {
    isDisabled: boolean;
    setIsDisabled: Dispatch<SetStateAction<boolean>>
}
interface IsDisabledProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    isDisabled: false,
    setIsDisabled: (IsRolling: boolean) => {}
} as IsDisabledContextInterface

export const IsDisabledContext = createContext(defaultValue);

export const useIsDisabledContext = () => {
    const isDisabled = useContext(IsDisabledContext);

    if(isDisabled === undefined){
        throw new Error('useIsRollingContext must be used with IsRollingContext')
    }
    return isDisabled;
}


// providing context
export const IsDisabledContextProvider = ({ children }: IsDisabledProviderProps) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    return <IsDisabledContext.Provider value={{ isDisabled, setIsDisabled }}>
        {children}
    </IsDisabledContext.Provider>
}