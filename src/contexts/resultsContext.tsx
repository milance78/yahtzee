import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface SingleField {
  fieldName: string;
  possibleFieldValue: number;
  definiteFieldValue: number;
  inputOpen: boolean;
}

interface ResultsContextInterface {
  results: (SingleField[])[];
  setResults: Dispatch<SetStateAction<(SingleField[])[]>>
}
interface ResultsProviderProps {
  children: React.ReactNode
}


// creating context with a default value
// can types be written in a simplier way?
const defaultValue = {
  results: [],
  setResults: (Results: (SingleField[])[]) => { }
} as ResultsContextInterface


export const ResultsContext = createContext(defaultValue);

// custom hook - protecting from undefined
export const useResultsContext = () => {
  const results = useContext(ResultsContext);

  if (results === undefined) {
    throw new Error('usePlayerResultsContextContext must be used with PlayerResultsContext')
  }
  return results;
}


// providing context
export const ResultsContextProvider = ({ children }: ResultsProviderProps) => {
  const [results, setResults] = useState<(SingleField[])[]>(
    [
      [{
        fieldName: 'Aces',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Twos',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Threes',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Fours',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Fives',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Sixes',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Upper bonus',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Upper total',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Three of a kind',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Four of a kind',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Full house',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Small straight',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Long straight',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Yahtzee',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Chance',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Yahtzee bonus',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Lower total',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      },
      {
        fieldName: 'Grand total',
        possibleFieldValue: 0,
        definiteFieldValue: 0,
        inputOpen: false
      }],
    ]
  );

  return <ResultsContext.Provider value={{ results, setResults }}>
    {children}
  </ResultsContext.Provider>
}