import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


interface CurrentDicesContextInterface {
    currentDices: number[];
    setCurrentDices: Dispatch<SetStateAction<number[]>>
}
interface CurrentDicesProviderProps {
    children: React.ReactNode
}


// creating context with a default value
// can types be written in a simplier way?
const defaultValue = {
    currentDices: [],
    setCurrentDices: (CurrentDices: number[]) => { }
} as CurrentDicesContextInterface


export const CurrentDicesContext = createContext(defaultValue);

// custom hook - protecting from undefined
export const useCurrentDicesContext = () => {
    const currentDices = useContext(CurrentDicesContext);

    if (currentDices === undefined) {
        throw new Error('useCurrentDicesContextContext must be used with DiceStatisticsContext')
    }
    return currentDices;
}


// providing context
export const CurrentDicesContextProvider = ({ children }: CurrentDicesProviderProps) => {
    const [currentDices, setCurrentDices] = useState<number[]>(
        [6, 6, 6, 6, 6]
    );


    return <CurrentDicesContext.Provider value={{ currentDices, setCurrentDices }}>
        {children}
    </CurrentDicesContext.Provider>
}