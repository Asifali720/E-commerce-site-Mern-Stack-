import { createContext } from "react"

interface DataProviderProps {
   
}

export const DataContext = createContext<DataProviderProps | null>(null)

const DataProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <DataContext.Provider value={{}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider