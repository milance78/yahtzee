import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface CurrentPlayerContextInterface {
    currentPlayer: number;
    setCurrentPlayer: Dispatch<SetStateAction<number>>
}
interface CurrentPlayerProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    currentPlayer: 1,
    setCurrentPlayer: (CurrentPlayer: number) => {}
} as CurrentPlayerContextInterface

export const CurrentPlayerContext = createContext(defaultValue);

export const useCurrentPlayerContext = () => {
    const currentPlayer = useContext(CurrentPlayerContext);

    if(currentPlayer === undefined){
        throw new Error('useCurrentPlayerContext must be used with CurrentPlayerContext')
    }
    return currentPlayer;
}


// providing context
export const CurrentPlayerContextProvider = ({ children }: CurrentPlayerProviderProps) => {
    const [currentPlayer, setCurrentPlayer] = useState<number>(1);

    return <CurrentPlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
        {children}
    </CurrentPlayerContext.Provider>
}