import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface NumberOfPlayersContextInterface {
    numberOfPlayers: number;
    setNumberOfPlayers: Dispatch<SetStateAction<number>>
}
interface NumberOfPlayersProviderProps {
    children: React.ReactNode
}
// creating context with a default value
const defaultValue = {
    numberOfPlayers: 1,
    setNumberOfPlayers: (NumberOfPlayers: number) => {}
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
    const [numberOfPlayers, setNumberOfPlayers] = useState<number>(1);

    return <NumberOfPlayersContext.Provider value={{ numberOfPlayers, setNumberOfPlayers }}>
        {children}
    </NumberOfPlayersContext.Provider>
}