import '@/styles/globals.css'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export default function App({ Component, pageProps, tourss }) {
  const [filteredTours, setFilteredTours] = useState()
  const [params, setParams] = useState()
  const [activePage, setActivePage] = useState(1)
  const [TOURS, SETTOURS] = useState()

  return <Context.Provider value={{ params, setParams, filteredTours, setFilteredTours, TOURS, SETTOURS, activePage, setActivePage }}>
    <Component {...pageProps} />
  </Context.Provider>
}