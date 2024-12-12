import {
  bindActionCreators,
  createSlice,
  UnknownAction,
  type PayloadAction,
} from "@reduxjs/toolkit"
import { createContext, ReactNode, useContext, useReducer } from "react"

type Scene = "start" | "escape" | "ending"
type Room =
  | "Stove"
  | "Tree"
  | "Dining"
  | "Entrance"
  | "Window"
  | "Step"
  | "Child"
  | "ExTree"
  | "ExCake"
  | "ExHomeWork"

type GameState = {
  // Define your game state properties here
  scene: Scene
  room: Room
}

const initialGameState: GameState = {
  scene: "start",
  room: "Stove",
}

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState: initialGameState,
  reducers: {
    switchScene: (state, action: PayloadAction<Scene>) => {
      state.scene = action.payload
    },
    toLeftRoom: (state, _: PayloadAction) => {
      switch (state.room) {
        case "Tree":
          state.room = "Stove"
          break
        case "Dining":
          state.room = "Tree"
          break
      }
    },
    toRightRoom: (state, _: PayloadAction) => {
      switch (state.room) {
        case "Stove":
          state.room = "Tree"
          break
        case "Tree":
          state.room = "Dining"
          break
      }
    },
  },
})

export const gameStateActions = gameStateSlice.actions

interface GameStateContextProps {
  gameState: GameState
  dispatch: React.Dispatch<UnknownAction>
}

const GameStateContext = createContext<GameStateContextProps>({
  gameState: initialGameState,
  dispatch: () => {},
})

export const useGameState = () => useContext(GameStateContext)

type Props = {
  children: ReactNode
}

export const GameStateProvider: React.FC<Props> = ({ children }) => {
  const [gameState, dispatch] = useReducer(
    gameStateSlice.reducer,
    initialGameState
  )

  return (
    <GameStateContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameStateContext.Provider>
  )
}
