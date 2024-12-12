/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ChildRoomBg from "../Images/Child/ChildRoomBg"
import HomeWorkImage from "../Images/Child/HomeWorkImage"
import ChildSleepImage from "../Images/Child/ChildSleepImage"
import BootImage from "../Images/Child/BootImage"
import BootEmptyImage from "../Images/Child/BootEmptyImage"
import ChildImage from "../Images/Child/ChildImage"
import MasterKeyImage from "../Images/Child/MasterKeyImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toExHomeWork } = gameStateActions

const ChildRoom: React.FC = () => {
  const {
    gameState: { workdone },
    dispatch,
  } = useGameState()

  return (
    <div>
      <MasterKeyImage css={masterKeyCss} />
      <ChildImage css={childCss(workdone)} />
      <BootEmptyImage css={bootEmptyCss(workdone)} />
      <BootImage css={bootCss} />
      <ChildSleepImage css={childSleepCss(workdone)} />
      <HomeWorkImage
        css={homeWorkCss}
        onClick={() => dispatch(toExHomeWork())}
      />
      <ChildRoomBg css={childBgCss} />
    </div>
  )
}

export default ChildRoom

const masterKeyCss = css`
  position: absolute;
  top: 39%;
  left: 14%;
  width: 14%;
  height: auto;
  z-index: 4;
`

const childCss = (workdone: boolean) => css`
  position: absolute;
  top: 16%;
  left: 32%;
  width: 32%;
  height: auto;
  z-index: 3;
  display: ${workdone ? "none" : "block"};
`

const bootEmptyCss = (workdone: boolean) => css`
  position: absolute;
  top: 18%;
  left: 47%;
  width: 13%;
  height: auto;
  z-index: 2;
  pointer-events: ${workdone ? "auto" : "none"};
`

const bootCss = css`
  position: absolute;
  top: 15%;
  left: 47%;
  width: 13%;
  height: auto;
  z-index: 1;
`

const childSleepCss = (workdone: boolean) => css`
  position: absolute;
  top: 26%;
  left: 28%;
  width: 76%;
  height: auto;
  z-index: 1;
  display: ${workdone ? "block" : "none"};
`

const homeWorkCss = css`
  position: absolute;
  top: 80%;
  left: 36%;
  width: 40%;
  height: auto;
  z-index: 2;
`

const childBgCss = css`
  width: 100%;
  height: 100%;
`
