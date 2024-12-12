/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DiningRoomBg from "../Images/Dining/DiningRoomBg"
import CakeImage from "../Images/Dining/CakeImage"
import CakeFullImage from "../Images/Dining/CakeFullImage"
import CookieBagImage from "../Images/Dining/CookieBagImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toExCake, getItem } = gameStateActions

const DiningRoom: React.FC = () => {
  const {
    gameState: { dininglight, items },
    dispatch,
  } = useGameState()

  return (
    <div css={offDiningCss(dininglight)}>
      <CookieBagImage
        css={cookieBagCss(items)}
        onClick={() => dispatch(getItem("Cookie"))}
      />
      <CakeImage css={cakeCss} onClick={() => dispatch(toExCake())} />
      <CakeFullImage css={cakeFullCss} onClick={() => dispatch(toExCake())} />
      <DiningRoomBg css={diningBgCss} />
    </div>
  )
}

export default DiningRoom

const offDiningCss = (dininglight: boolean) => css`
  opacity: ${dininglight ? 1 : 0.1};
  pointer-events: ${dininglight ? "auto" : "none"};
`

const cookieBagCss = (items: { cookie: string }) => css`
  position: absolute;
  top: 56%;
  left: 61%;
  width: 12%;
  z-index: 2;
  display: ${items.cookie !== "none" ? "none" : "block"};
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
