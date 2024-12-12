import Container from "./components/Container"
import Ending from "./components/Ending"
import Escape from "./components/Escape"
import { GameStateProvider } from "./components/GameStateProvider"
import Start from "./components/Start"
import React, { useReducer } from "react"

// シーンの変更
const initialSceneState = { scene: "escape" }

type SceneState = { scene: string }
type SceneAction = { type: "START" | "ESCAPE" | "ENDING" }

function sceneReducer(state: SceneState, action: SceneAction): SceneState {
  switch (action.type) {
    case "START":
      return { scene: "start" }
    case "ESCAPE":
      return { scene: "escape" }
    case "ENDING":
      return { scene: "ending" }
    default:
      throw new Error()
  }
}

const SceneContext = React.createContext()

function App() {
  const [sceneState, sceneDispatch] = useReducer(
    sceneReducer,
    initialSceneState
  )

  return (
    <SceneContext.Provider
      value={{ state: sceneState, dispatch: sceneDispatch }}
    >
      <GameStateProvider>
        <Container>
          {sceneState.scene === "start" && <Start />}
          {sceneState.scene === "escape" && <Escape />}
          {sceneState.scene === "ending" && <Ending />}
        </Container>
      </GameStateProvider>
    </SceneContext.Provider>
  )
}

export { SceneContext }

export default App
