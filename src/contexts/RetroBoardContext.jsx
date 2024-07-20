import { useState, createContext } from 'react'

export const RetroBoardContext = createContext()

export const RetroBoardProvider = ({ children }) => {
  const [cards, setCards] = useState([])

  const addCard = (category) => {
    const newCard = {
      retroId: cards.length + 1,
      category,
      text: '',
      likes: 0,
      dislikes: 0,
    }
    setCards([...cards, newCard])
  }

  const removeCard = (retroId) => {
    setCards(cards.filter((card) => card.retroId !== retroId))
  }

  const updateCardText = (retroId, newText) => {
    setCards(
      cards.map((card) =>
        card.retroId === retroId ? { ...card, text: newText } : card
      )
    )
  }

  const addLike = (retroId) => {
    setCards(
      cards.map((card) =>
        card.retroId === retroId ? { ...card, likes: card.likes + 1 } : card
      )
    )
  }

  const addDislike = (retroId) => {
    setCards(
      cards.map((card) =>
        card.retroId === retroId
          ? { ...card, dislikes: card.dislikes + 1 }
          : card
      )
    )
  }

  const moveLeft = (retroId) => {
    setCards(
      cards.map((card) =>
        card.retroId === retroId
          ? {
              ...card,
              category: card.category > 1 ? card.category - 1 : card.category,
            }
          : card
      )
    )
  }

  const moveRight = (retroId) => {
    setCards(
      cards.map((card) =>
        card.retroId === retroId
          ? {
              ...card,
              category: card.category < 4 ? card.category + 1 : card.category,
            }
          : card
      )
    )
  }

  return (
    <RetroBoardContext.Provider
      value={[
        addCard,
        updateCardText,
        addLike,
        addDislike,
        removeCard,
        moveLeft,
        moveRight,
        cards,
      ]}
    >
      {children}
    </RetroBoardContext.Provider>
  )
}
