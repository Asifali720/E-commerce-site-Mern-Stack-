import React, { createContext } from "react"
import {products} from "../../data/assets/frontend_assets/assets.ts"

export interface DataProviderProps {
   products: Array<any>
   currency: string
   delivery_fee: number
}

export const DataContext = createContext<DataProviderProps | null>(null)

const DataProvider = ({children}: {children: React.ReactNode}) => {
  const currency = "$"
  const delivery_fee = 10

  return (
    <DataContext.Provider value={{products, currency, delivery_fee}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider