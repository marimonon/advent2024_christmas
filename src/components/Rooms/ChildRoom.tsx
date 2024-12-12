/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import ChildRoomBg from "../Images/Child/ChildRoomBg"
import HomeWorkImage from "../Images/Child/HomeWorkImage"
import ChildSleepImage from "../Images/Child/ChildSleepImage"
import BootImage from "../Images/Child/BootImage"
import BootEmptyImage from "../Images/Child/BootEmptyImage"
import ChildImage from "../Images/Child/ChildImage"
import MasterKeyImage from "../Images/Child/MasterKeyImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toExHomeWork, useBag, getMaster } = gameStateActions

const ChildRoom: React.FC = () => {
  const {
    gameState: { workdone, items },
    dispatch,
  } = useGameState()

  return (
    <div>
      {items.bag === "use" && items.master === "none" && (
        <MasterKeyImage
          css={masterKeyCss}
          onClick={() => dispatch(getMaster())}
        />
      )}
      {!workdone && <ChildImage css={childCss} />}
      {items.bag !== "use" && (
        <BootEmptyImage
          css={bootEmptyCss(workdone)}
          onClick={() => dispatch(useBag())}
        />
      )}
      {items.bag === "use" && <BootImage css={bootCss} />}
      {workdone && <ChildSleepImage css={childSleepCss} />}
      <HomeWorkImage
        css={homeWorkCss}
        onClick={() => dispatch(toExHomeWork())}
      />
      <ChildRoomBg css={childBgCss} />
    </div>
  )
}

export default ChildRoom

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const masterKeyCss = css`
  position: absolute;
  top: 39%;
  left: 14%;
  width: 14%;
  height: auto;
  z-index: 4;
  animation: ${fadeIn} 1s ease;
`

const childCss = css`
  position: absolute;
  top: 16%;
  left: 32%;
  width: 32%;
  height: auto;
  z-index: 3;
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

const childSleepCss = css`
  position: absolute;
  top: 26%;
  left: 28%;
  width: 76%;
  height: auto;
  z-index: 1;
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
