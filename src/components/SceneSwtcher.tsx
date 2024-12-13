import Container from "./Container"
import Ending from "./Ending"
import Escape from "./Escape"
import { useGameState } from "./GameStateProvider"
import Start from "./Start"

const SceneSwitcher: React.FC = () => {
  const {
    gameState: { scene },
  } = useGameState()

  return (
    <Container>
      {scene === "start" && <Start />}
      {scene === "escape" && <Escape />}
      {scene === "ending" && <Ending />}
    </Container>
  )
}

export default SceneSwitcher
