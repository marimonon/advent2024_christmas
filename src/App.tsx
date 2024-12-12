import Container from "./components/Container"
import Ending from "./components/Ending"
import Escape from "./components/Escape"
import Start from "./components/Start"
import React, { useReducer } from "react"

const initialState = { scene: "start" }

function reducer(state, action) {
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
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SceneContext.Provider value={{ state, dispatch }}>
      <Container>
        {state.scene === "start" && <Start />}
        {state.scene === "escape" && <Escape />}
        {state.scene === "ending" && <Ending />}
      </Container>
    </SceneContext.Provider>
  )
}

export { SceneContext }

export default App
