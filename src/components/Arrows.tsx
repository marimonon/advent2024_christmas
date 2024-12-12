/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ArrowImage from "./Images/ArrowImage"
import { gameStateActions, useGameState } from "./GameStateProvider"

const { toLeftRoom, toRightRoom } = gameStateActions

const Arrows: React.FC = () => {
  const {
    gameState: { room },
  } = useGameState()

  const { dispatch } = useGameState()
  return (
    <>
      {(room === "Tree" ||
        room === "Dining" ||
        room === "Window" ||
        room === "Entrance") && (
        <div css={leftCss} onClick={() => dispatch(toLeftRoom())}>
          <ArrowImage />
        </div>
      )}
      {(room === "Stove" ||
        room === "Tree" ||
        room === "Step" ||
        room === "Window") && (
        <div css={rightCss} onClick={() => dispatch(toRightRoom())}>
          <ArrowImage />
        </div>
      )}
      {(room === "Entrance" ||
        room === "Child" ||
        room === "ExTree" ||
        room === "ExHomeWork") && (
        <div css={bottomCss}>
          <ArrowImage />
        </div>
      )}
    </>
  )
}

export default Arrows

const leftCss = css`
  position: absolute;
  top: 48%;
  z-index: 100;
`

const rightCss = css`
  position: absolute;
  top: 48%;
  right: 0;
  transform: rotate(180deg);
  z-index: 100;
`

const bottomCss = css`
  position: absolute;
  bottom: 0;
  left: 48%;
  transform: rotate(-90deg);
  z-index: 100;
`
