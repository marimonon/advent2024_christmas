/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import EntranceRoomBg from "../Images/Entrance/EntranceRoomBg"
import RibbonImage from "../Images/Entrance/RibbonImage"
import EntranceDoorImage from "../Images/Entrance/EntranceDoorImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
import Comment from "../Comment"
const { getRibbon, useMaster, switchScene } = gameStateActions

const EntranceRoom: React.FC = () => {
  const {
    gameState: { items },
    dispatch,
  } = useGameState()

  const doorOpen = () => {
    dispatch(useMaster())
    setTimeout(() => {
      dispatch(switchScene("ending"))
    }, 2000)
  }
  const [comment, setComment] = useState("")

  return (
    <div>
      {comment && <Comment setComment={setComment}>{comment}</Comment>}
      <EntranceDoorImage css={doorCss(items)} onClick={doorOpen} />
      <RibbonImage
        css={ribbonCss(items)}
        onClick={() => {
          dispatch(getRibbon())
          setComment("リボンをgetした")
        }}
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
