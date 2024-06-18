
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface RollCounterContextInterface {
    rollCounter: number;
    setRollCounter: Dispatch<SetStateAction<number>>
}
interface RollCounterProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    rollCounter: 1,
    setRollCounter: (RollCounter: number) => {}
} as RollCounterContextInterface

export const RollCounterContext = createContext(defaultValue);

export const useRollCounterContext = () => {
    const rollCounter = useContext(RollCounterContext);

    if(rollCounter === undefined){
        throw new Error('rollCounterContext must be used with IsRollingContext')
    }
    return rollCounter;
}


// providing context
export const RollCounterContextProvider = ({ children }: RollCounterProviderProps) => {
    const [rollCounter, setRollCounter] = useState<number>(1);

    return <RollCounterContext.Provider value={{ rollCounter, setRollCounter }}>
        {children}
    </RollCounterContext.Provider>
}