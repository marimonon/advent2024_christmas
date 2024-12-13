/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import DiningRoomBg from "../Images/Dining/DiningRoomBg"
import CakeImage from "../Images/Dining/CakeImage"
import CakeFullImage from "../Images/Dining/CakeFullImage"
import CookieBagImage from "../Images/Dining/CookieBagImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
import Comment from "../Comment"
const { toExCake, getCookie } = gameStateActions

const DiningRoom: React.FC = () => {
  const [comment, setComment] = useState("")
  const {
    gameState: { dininglight, items },
    dispatch,
  } = useGameState()

  return (
    <div css={offDiningCss(dininglight)}>
      {comment && <Comment setComment={setComment}>{comment}</Comment>}
      {items.cookie === "none" && (
        <CookieBagImage
          css={cookieBagCss}
          onClick={() => {
            dispatch(getCookie())
            setComment("クッキーをgetした")
          }}
        />
      )}
      {items.berry !== "use" && (
        <CakeImage css={cakeCss} onClick={() => dispatch(toExCake())} />
      )}
      {items.berry === "use" && (
        <CakeFullImage css={cakeFullCss} onClick={() => dispatch(toExCake())} />
      )}
      <DiningRoomBg css={diningBgCss} />
    </div>
  )
}

export default DiningRoom

const offDiningCss = (dininglight: boolean) => css`
  opacity: ${dininglight ? 1 : 0.1};
  pointer-events: ${dininglight ? "auto" : "none"};
`

const cookieBagCss = css`
  position: absolute;
  top: 56%;
  left: 61%;
  width: 12%;
  z-index: 2;
`

const cakeCss = css`
  position: absolute;
  top: 42%;
  left: 10%;
  width: 20%;
  z-index: 3;
`

const cakeFullCss = css`
  position: absolute;
  top: 42%;
  left: 10%;
  width: 20%;
  z-index: 4;
`

const diningBgCss = css`
  width: 100%;
  height: 100%;
`
