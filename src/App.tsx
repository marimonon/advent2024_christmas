import { GameStateProvider } from "./components/GameStateProvider"
import SceneSwitcher from "./components/SceneSwtcher"

function App() {
  return (
    <GameStateProvider>
      <SceneSwitcher />
    </GameStateProvider>
  )
}

export default App
