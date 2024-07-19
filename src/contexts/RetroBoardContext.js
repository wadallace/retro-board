import {createContext, useState, useContext } from 'reace'

const RetroBoardContext = createContext()

export const RetroBoardProvider = ({ children }) => {

  const [cards, setCards] = useState([])

  return (
      <>
        <RetroBoardContext.Provider value={}''>
          {children}
        </RetroBoardContext.Provider>
      </>
  )
 }

