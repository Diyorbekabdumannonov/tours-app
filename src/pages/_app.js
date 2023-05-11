import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const Context = createContext()

export default function App({ Component, pageProps }) {
  const [params, setParams] = useState()
  return <Context.Provider value={{ params, setParams }}>
    <Component {...pageProps} />
  </Context.Provider>
}
