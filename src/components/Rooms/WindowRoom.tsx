/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import WindowRoomBg from "../Images/Window/WindowRoomBg"
import HungryDogImage from "../Images/Window/HungryDogImage"
import WindowDeerImage from "../Images/Window/WindowDeerImage"
import SweatDeerImage from "../Images/Window/SweatDeerImage"
import EatingDogImage from "../Images/Window/EatingDogImage"
import WindowBarImage from "../Images/Window/WindowBarImage"
import CurtainImage from "../Images/Window/CurtainImage"
import SantaBagImage from "../Images/Window/SantaBagImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
import { useState } from "react"
const { getBag, useCookie } = gameStateActions

const WindowRoom: React.FC = () => {
  const [dogaway, setDogaway] = useState(false)
  const {
    gameState: { items },
    dispatch,
  } = useGameState()

  return (
    <div>
      <CurtainImage css={curtainCss} />
      {items.cookie === "use" && items.bag === "none" && (
        <SantaBagImage
          css={bagCss}
          onClick={() => {
            dispatch(getBag())
            setDogaway(true)
          }}
        />
      )}
      <WindowBarImage css={barCss} />
      {items.cookie === "use" && <EatingDogImage css={eatingCss} />}
      {items.cookie !== "use" && <SweatDeerImage css={sweatCss} />}
      {items.cookie !== "use" && (
        <HungryDogImage
          css={hungryCss}
          onClick={() => {
            dispatch(useCookie())
            setDogaway(true)
          }}
        />
      )}
      {items.cookie === "use" && <WindowDeerImage css={windowDeerCss} />}
      <WindowRoomBg css={windowBgCss} />
    </div>
  )
}

export default WindowRoom

const curtainCss = css`
  position: absolute;
  top: 14%;
  left: 16%;
  width: 70%;
  height: auto;
  z-index: 6;
  pointer-events: none;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const bagCss = css`
  position: absolute;
  top: 47%;
  left: 16%;
  width: 38%;
  height: auto;
  z-index: 7;
  animation: ${fadeIn} 2s;
`

const barCss = css`
  position: absolute;
  top: 15%;
  left: 50%;
  width: 4.5%;
  height: auto;
  z-index: 5;
`

const eatingCss = css`
  position: absolute;
  top: 20%;
  left: 56%;
  width: 12%;
  height: auto;
  z-index: 4;
`

const sweatCss = css`
  position: absolute;
  top: 20%;
  left: 56%;
  width: 12%;
  height: auto;
  z-index: 1;
`

const hungryCss = css`
  position: absolute;
  top: 27%;
  left: 22%;
  width: 42%;
  height: auto;
  z-index: 3;
`

const windowDeerCss = css`
  position: absolute;
  top: 30%;
  left: 24%;
  width: 33%;
  height: auto;
  z-index: 2;
  animation: ${fadeIn} 2s;
`
const windowBgCss = css`
  width: 100%;
  height: 100%;
`
