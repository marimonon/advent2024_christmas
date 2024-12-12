/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"
import RibbonImage from "../Images/Entrance/RibbonImage"
import EntranceDoorImage from "../Images/Entrance/EntranceDoorImage"
import { useState, useContext } from "react"
import { SceneContext } from "../../App"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { getRibbon, useMaster } = gameStateActions

const EntranceRoom: React.FC = () => {
  const sceneContext = useContext(SceneContext)

  const doorOpen = () => {
    dispatch(useMaster())
    setTimeout(() => {
      sceneContext.dispatch({ type: "ENDING" })
    }, 2000)
  }

  const {
    gameState: { items },
    dispatch,
  } = useGameState()

  return (
    <div>
      <EntranceDoorImage css={doorCss(items)} onClick={doorOpen} />
      <RibbonImage
        css={ribbonCss(items)}
        onClick={() => dispatch(getRibbon())}
      />
      <EntranceRoomBg css={entranceBg} />
    </div>
  )
}

export default EntranceRoom

const doorCss = (items: { master: string }) => css`
  position: absolute;
  width: 45.2%;
  height: auto;
  bottom: 11%;
  right: 13.5%;
  z-index: 3;
  opacity: ${items.master === "use" ? 0 : 1};
  transition: opacity 1s;
  pointer-events: ${items.master === "get" ? "auto" : "none"};
`

const ribbonCss = (items: { ribbon: string }) => css`
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 0%;
  left: 8%;
  z-index: 2;
  display: ${items.ribbon !== "none" ? "none" : "block"};
`

const entranceBg = css`
  width: 100%;
  height: 100%;
`
