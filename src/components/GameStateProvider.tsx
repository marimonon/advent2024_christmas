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
        case "Window":
          state.room = "Step"
          break
        case "Entrance":
          state.room = "Window"
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
        case "Step":
          state.room = "Window"
          break
        case "Window":
          state.room = "Entrance"
          break
      }
    },
    toBottomRoom: (state, _: PayloadAction) => {
      switch (state.room) {
        case "Entrance":
          state.room = "Stove"
          break
        case "Child":
          state.room = "Step"
          break
        case "ExTree":
          state.room = "Tree"
          break
        case "ExCake":
          state.room = "Dining"
          break
        case "ExHomeWork":
          state.room = "Child"
          break
      }
    },
    toChildRoom: (state, _: PayloadAction) => {
      state.room = "Child"
    },
    toEntranceRoom: (state, _: PayloadAction) => {
      state.room = "Entrance"
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
