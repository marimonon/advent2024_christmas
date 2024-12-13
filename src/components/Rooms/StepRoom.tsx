/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import StepRoomBg from "../Images/Step/StepRoomBg"
import BearRibbonImage from "../Images/Step/BearRibbonImage"
import BearImage from "../Images/Step/BearImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
import Comment from "../Comment"
const { toChildRoom, useRibbon } = gameStateActions

const StepRoom: React.FC = () => {
  const {
    gameState: { items },
    dispatch,
  } = useGameState()

  const [comment, setComment] = useState("")

  return (
    <div>
      {comment && <Comment setComment={setComment}>{comment}</Comment>}
      <div css={toChildCss} onClick={() => dispatch(toChildRoom())}></div>
      {items.ribbon !== "use" && (
        <BearImage
          css={bearCss}
          onClick={() => {
            dispatch(useRibbon())
            if (items.ribbon === "get") {
              setComment("くま「ありがとう！！」")
            } else {
              setComment("くま「...リボンがあったような...。」")
            }
          }}
        />
      )}
      {items.ribbon === "use" && (
        <BearRibbonImage
          css={bearRibbonCss}
          onClick={() =>
            setComment("くま「マスタリ...図表...身近...みんな...楽しい」")
          }
        />
      )}
      <StepRoomBg css={stepBgCss} />
    </div>
  )
}

export default StepRoom

const toChildCss = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 14%;
  z-index: 7;
`

const bearCss = css`
  position: absolute;
  top: 44%;
  left: 10%;
  width: 30%;
  height: auto;
  z-index: 5;
`

const bearRibbonCss = css`
  position: absolute;
  top: 44%;
  left: 10%;
  width: 33%;
  height: auto;
  z-index: 6;
`

const stepBgCss = css`
  width: 100%;
  height: 100%;
`
