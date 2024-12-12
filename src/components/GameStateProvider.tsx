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
  scene: Scene
  room: Room
  treelight: boolean
}

const initialGameState: GameState = {
  scene: "start",
  room: "Stove",
  treelight: false,
}

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState: initialGameState,
  reducers: {
    // シーンの切り替え
    switchScene: (state, action: PayloadAction<Scene>) => {
      state.scene = action.payload
    },
    // 部屋の切り替え
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
    toExTree: (state, _: PayloadAction) => {
      state.room = "ExTree"
    },
    toExCake: (state, _: PayloadAction) => {
      state.room = "ExCake"
    },
    toExHomeWork: (state, _: PayloadAction) => {
      state.room = "ExHomeWork"
    },
    // 木の灯りの切り替え
    switchTreeLight: (state, _: PayloadAction) => {
      state.treelight = true
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
