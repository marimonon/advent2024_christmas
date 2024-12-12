/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import { useState } from "react"
import Comment from "../Comment"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"
import BigSnowmanImage from "../Images/Stove/BigSnowmanImage"
import StrawberryImage from "../Images/Stove/StrawberryImage"
import FireImage from "../Images/Stove/FireImage"
import FirewoodImage from "../Images/Stove/FirewoodImage"
import SnowmanImage from "../Images/Stove/SnowmanImage"
import DoorCloseImage from "../Images/Stove/DoorCloseImage"
import DoorOpenImage from "../Images/Stove/DoorOpenImage"
import { gameStateActions, useGameState } from "../GameStateProvider"
const { toEntranceRoom, openDoor, getBerry, useCandle } = gameStateActions

const StoveRoom: React.FC = () => {
  const {
    gameState: { dooropen, items },
    dispatch,
  } = useGameState()

  const [snowSmall, setSnowSmall] = useState(false)
  const [snowrun, setSnowrun] = useState(false)

  return (
    <div>
      {/* <Comment>雪だるま「お外に出たーい！」</Comment> */}
      {items.berry === "none" && (
        <StrawberryImage css={strawCss} onClick={() => dispatch(getBerry())} />
      )}
      {(items.candle !== "use" || snowSmall) && (
        <BigSnowmanImage css={bigSnowCss(items)} />
      )}
      <FirewoodImage css={fireWoodCss} />
      <FireImage
        css={fireCss(items)}
        onClick={() => {
          dispatch(useCandle())
          setSnowSmall(true)
        }}
      />
      {(!dooropen || snowrun) && items.candle === "use" && (
        <SnowmanImage css={smallSnowCss(snowrun)} />
      )}
      {!dooropen && (
        <DoorCloseImage
          css={doorCloseCss(items)}
          onClick={() => {
            dispatch(openDoor())
            setSnowrun(true)
          }}
        />
      )}
      {dooropen && (
        <DoorOpenImage
          css={doorOpenCss}
          onClick={() => dispatch(toEntranceRoom())}
        />
      )}
      <StoveRoomBg css={stoveBgCss} />
    </div>
  )
}

export default StoveRoom

const strawCss = css`
  position: absolute;
  width: 6%;
  height: auto;
  top: 40%;
  left: 28%;
  z-index: 5;
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate(40% , 40%);
    scale: 0.5;
    opacity: 0;
  }
`

const bigSnowCss = (items: { candle: string }) => css`
  position: absolute;
  width: 54%;
  height: auto;
  top: 0%;
  left: 5%;
  z-index: 4;
  ${items.candle === "use" &&
  css`
    animation: ${fadeOut} 2s forwards;
  `};
`

const fireWoodCss = css`
  position: absolute;
  width: 20%;
  height: auto;
  bottom: 16%;
  right: 10%;
  z-index: 3;
`

const fireMoveAnime = keyframes`
  0% {
    transform: translateY(0);
    transform: scale(1);
  }
  50% {
    transform: translateY(30%);
    transform: scale(1.1);
  }
  100% {
    transform: translateY(0);
    transform: scale(1);
  }
`

const fireCss = (items: { candle: string }) => css`
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 16%;
  right: 6%;
  z-index: 2;
  opacity: ${items.candle !== "use" ? 0 : 1};
  animation: ${fireMoveAnime} 2s infinite;
`

const smallSnowMoveAnime = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-140%);
  }
`

const smallSnowCss = (snowrun: boolean) => css`
  position: absolute;
  width: 36%;
  height: auto;
  bottom: 15%;
  left: 32%;
  z-index: 1;
  ${snowrun &&
  css`
    animation: ${smallSnowMoveAnime} 2s forwards;
  `};
`

const doorCloseCss = (items: { candle: string }) => css`
  position: absolute;
  width: 32%;
  height: auto;
  top: 28%;
  left: 0%;
  z-index: 2;
  pointer-events: ${items.candle !== "use" ? "none" : "auto"};
`

const doorOpenCss = css`
  position: absolute;
  width: 32%;
  height: auto;
  top: 28%;
  left: 0%;
  z-index: 2;
`

const stoveBgCss = css`
  width: 100%;
  height: 100%;
`
