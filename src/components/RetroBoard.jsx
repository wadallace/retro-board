import RetroCard from './RetroCard.jsx'
import { useContext } from 'react'
import { RetroBoardContext } from '../contexts/RetroBoardContext'

const RetroBoard = () => {
  const columns = [
    { id: 1, title: 'Went Well', cards: [] },
    { id: 2, title: 'To Improve', cards: [] },
    { id: 3, title: 'Action Items', cards: [] },
  ]
  const [
    addCard,
    updateCardText,
    addLike,
    addDislike,
    removeCard,
    moveLeft,
    moveRight,
    cards,
  ] = useContext(RetroBoardContext)

  return (
    <>
      {columns.map((column) => {
        const columnStyle = `RetroCategory RetroCategory-${column.id}`
        const columnCards = cards.filter((card) => card.category === column.id)

        return (
          <div
            className={columnStyle}
            id={`column-${column.id}`}
            key={column.id}
          >
            <h2>{column.title}</h2>
            <button
              type='button'
              className='ButtonAdd button button-default'
              aria-label='Add new card'
              title='Add new card'
              onClick={() => addCard(column.id)}
            >
              +
            </button>
            {columnCards.map((retroCard) => (
              <RetroCard
                key={retroCard.retroId}
                retroCard={retroCard}
                cards={cards}
                category={cards.category}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}

export default RetroBoard
