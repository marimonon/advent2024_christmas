/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StepRoomBg from "../Images/Step/StepRoomBg"
import BearRibbonImage from "../Images/Step/BearRibbonImage"
import BearImage from "../Images/Step/BearImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toChildRoom, useRibbon } = gameStateActions

const StepRoom: React.FC = () => {
  const {
    gameState: { items },
    dispatch,
  } = useGameState()

  return (
    <div>
      <div css={toChildCss} onClick={() => dispatch(toChildRoom())}></div>
      {items.ribbon !== "use" && (
        <BearImage css={bearCss} onClick={() => dispatch(useRibbon())} />
      )}
      {items.ribbon === "use" && <BearRibbonImage css={bearRibbonCss} />}
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
