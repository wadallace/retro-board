import './App.css'
import { RetroBoardProvider } from './contexts/RetroBoardContext'
import RetroBoard from './components/RetroBoard'

function App() {
  return (
    <RetroBoardProvider>
      <RetroBoard />
    </RetroBoardProvider>
  )
}

export default App
