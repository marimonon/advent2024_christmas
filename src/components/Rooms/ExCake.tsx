/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ExCakeBg from "../Images/Dining/ExCakeBg"
import ExCandlesImage from "../Images/Dining/ExCandlesImage"
import ExDecoImage from "../Images/Dining/ExDecoImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { getCandle, useBerry } = gameStateActions

const ExCake: React.FC = () => {
  const {
    gameState: { items },
    dispatch,
  } = useGameState()
  return (
    <div>
      <ExDecoImage
        css={exDecoCss(items)}
        onClick={() => dispatch(getCandle())}
      />
      <ExCandlesImage css={exCandlesCss} onClick={() => dispatch(useBerry())} />
      <ExCakeBg css={exCakeBgCss} />
    </div>
  )
}

export default ExCake

const exDecoCss = (items: { berry: string }) => css`
  position: absolute;
  top: -2%;
  left: 18%;
  width: 70%;
  height: auto;
  z-index: 3;
  display: ${items.berry === "use" ? "block" : "none"};
`

const exCandlesCss = css`
  position: absolute;
  top: 20%;
  left: 19%;
  width: 55%;
  height: auto;
  z-index: 2;
`

const exCakeBgCss = css`
  width: 100%;
  height: 100%;
`
