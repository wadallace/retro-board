import './App.css'
import { RetroBoardProvider } from './contexts/RetroBoardContext.jsx'
import RetroBoard from './components/RetroBoard'

function App() {
  return (
    <div id='root'>
      <main className='content row'>
        <h1>Retro Board</h1>
        <div className='RetroApp row'>
          <RetroBoardProvider>
            <RetroBoard />
          </RetroBoardProvider>
        </div>
      </main>
    </div>
  )
}

export default App
