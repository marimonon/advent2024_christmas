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

type Item = "Berry" | "Cookie" | "Candle" | "Ribbon" | "Bag" | "Master"
type ItemStatus = "none" | "get" | "use"
type GameState = {
  scene: Scene
  room: Room
  items: {
    berry: ItemStatus
    cookie: ItemStatus
    candle: ItemStatus
    ribbon: ItemStatus
    bag: ItemStatus
    master: ItemStatus
  }
  treelight: boolean
  dininglight: boolean
  dooropen: boolean
  workdone: boolean
}

const initialGameState: GameState = {
  scene: "start",
  room: "Stove",
  items: {
    berry: "none",
    cookie: "none",
    candle: "none",
    ribbon: "none",
    bag: "none",
    master: "none",
  },
  treelight: false,
  dininglight: false,
  dooropen: false,
  workdone: false,
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
    // アイテムの追加
    getItem: (state, action: PayloadAction<Item>) => {
      state.items[action.payload.toLowerCase() as keyof typeof state.items] =
        "get"
    },
    // アイテムの使用
    useItem: (state, action: PayloadAction<Item>) => {
      state.items[action.payload.toLowerCase() as keyof typeof state.items] =
        "use"
    },
    // 木の灯りの切り替え
    switchTreeLight: (state, _: PayloadAction) => {
      state.treelight = true
    },
    // ダイニングの灯りの切り替え
    switchDiningLight: (state, _: PayloadAction) => {
      state.dininglight = true
    },
    // ドアの開閉
    openDoor: (state, _: PayloadAction) => {
      state.dooropen = true
    },
    // 宿題の完了
    finishWork: (state, _: PayloadAction) => {
      state.workdone = true
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
