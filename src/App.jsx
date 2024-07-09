import './App.css'

function App() {
  return (
    <>
      <div id='root'>
        <main className='content row'>
          <h1>Retro Board</h1>

          <div className='RetroApp row'>
            <div className='RetroCategory RetroCategory-1'>
              <h2>Went Well</h2>

              <button
                type='button'
                className='ButtonAdd button button-default'
                aria-label='Add new card'
                title='Add new card'
              >
                +
              </button>

              <div
                className='RetroCard'
                aria-label='Retro card'
              >
                <textarea
                  className='textbox'
                  placeholder='Enter text here'
                  aria-label='Enter text here'
                  rows='1'
                  value='Here is an example card'
                ></textarea>

                <div className='button-group'>
                  <button
                    type='button'
                    className='button button-left'
                    title='Move left'
                  >
                    ⟨
                  </button>
                  <button
                    type='button'
                    className='button button-delete'
                    title='Delete'
                  >
                    ⓧ
                  </button>
                  <div>
                    <button
                      type='button'
                      className='button button-left'
                      title='Like'
                    >
                      👍 5
                    </button>
                    <button
                      type='button'
                      className='button button-left'
                      title='Dislike'
                    >
                      👎 0
                    </button>
                    <button
                      type='button'
                      className='button button-right'
                      title='Move right'
                    >
                      ⟩
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='RetroCategory RetroCategory-2'>
              <h2>To Improve</h2>
              <button
                type='button'
                className='ButtonAdd button button-default'
                aria-label='Add to new card'
                title='Add to new card'
              >
                +
              </button>
              <div
                className='RetroCard'
                aria-label='Retro card'
              >
                <textarea
                  className='textbox'
                  placeholder='Enter text here'
                  aria-label='Enter text here'
                  rows='1'
                  value='Here is an example card'
                ></textarea>

                <div className='button-group'>
                  <button
                    type='button'
                    className='button button-left'
                    title='Move left'
                  >
                    ⟨
                  </button>
                  <button
                    type='button'
                    className='button button-delete'
                    title='Delete'
                  >
                    ⓧ
                  </button>
                  <div>
                    <button
                      type='button'
                      className='button button-left'
                      title='Like'
                    >
                      👍 5
                    </button>
                    <button
                      type='button'
                      className='button button-left'
                      title='Dislike'
                    >
                      👎 0
                    </button>
                    <button
                      type='button'
                      className='button button-right'
                      title='Move right'
                    >
                      ⟩
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='RetroCategory RetroCategory-3'>
              <h2>Action Items</h2>
              <button
                type='button'
                className='ButtonAdd button button-default'
                aria-label='Add to new card'
                title='Add to new card'
              >
                +
              </button>
              <div
                className='RetroCard'
                aria-label='Retro card'
              >
                <textarea
                  className='textbox'
                  placeholder='Enter text here'
                  aria-label='Enter text here'
                  rows='1'
                  value='Here is an example card'
                ></textarea>

                <div className='button-group'>
                  <button
                    type='button'
                    className='button button-left'
                    title='Move left'
                  >
                    ⟨
                  </button>
                  <button
                    type='button'
                    className='button button-delete'
                    title='Delete'
                  >
                    ⓧ
                  </button>
                  <div>
                    <button
                      type='button'
                      className='button button-left'
                      title='Like'
                    >
                      👍 5
                    </button>
                    <button
                      type='button'
                      className='button button-left'
                      title='Dislike'
                    >
                      👎 0
                    </button>
                    <button
                      type='button'
                      className='button button-right'
                      title='Move right'
                    >
                      ⟩
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
