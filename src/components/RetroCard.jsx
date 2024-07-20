import { useContext } from 'react'
import { RetroBoardContext } from '../contexts/RetroBoardContext'

const RetroCard = ({ retroCard }) => {
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

  const card = cards.find((card) => card.retroId === retroCard.retroId) || {
    text: '',
    likes: 0,
    dislikes: 0,
  }

  return (
    <>
      <div id={retroCard.retroId}>
        <div
          className='RetroCard'
          aria-label='Retro card'
        >
          <textarea
            className='textbox'
            placeholder='Enter text here'
            aria-label='Enter text here'
            rows='1'
            value={card.text}
            onChange={(e) => updateCardText(retroCard.retroId, e.target.value)}
          ></textarea>

          <div className='button-group'>
            <button
              type='button'
              className='button button-left'
              title='Move left'
              onClick={() => moveLeft(retroCard.retroId)}
            >
              ⟨
            </button>
            <button
              type='button'
              className='button button-delete'
              title='Delete'
              onClick={() => removeCard(retroCard.retroId)}
            >
              ⓧ
            </button>
            <div>
              <button
                type='button'
                className='button button-left'
                title='Like'
                onClick={() => addLike(retroCard.retroId)}
              >
                👍 {card.likes}
              </button>
              <button
                type='button'
                className='button button-left'
                title='Dislike'
                onClick={() => addDislike(retroCard.retroId)}
              >
                👎 {card.dislikes}
              </button>
              <button
                type='button'
                className='button button-right'
                title='Move right'
                onClick={() => moveRight(retroCard.retroId)}
              >
                ⟩
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RetroCard
