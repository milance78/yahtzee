import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface NumberOfPlayersContextInterface {
    numberOfPlayers: number | null;
    setNumberOfPlayers: Dispatch<SetStateAction<number | null>>
}
interface NumberOfPlayersProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    numberOfPlayers: null,
    setNumberOfPlayers: (NumberOfPlayers: number | null) => {}
} as NumberOfPlayersContextInterface

export const NumberOfPlayersContext = createContext(defaultValue);

export const useNumberOfPlayersContext = () => {
    const numberOfPlayers = useContext(NumberOfPlayersContext);

    if(numberOfPlayers === undefined){
        throw new Error('useNumberOfPlayersContext must be used with NumberOfPlayersContext')
    }
    return numberOfPlayers;
}


// providing context
export const NumberOfPlayersContextProvider = ({ children }: NumberOfPlayersProviderProps) => {
    const [numberOfPlayers, setNumberOfPlayers] = useState<number | null>(null);

    return <NumberOfPlayersContext.Provider value={{ numberOfPlayers, setNumberOfPlayers }}>
        {children}
    </NumberOfPlayersContext.Provider>
}