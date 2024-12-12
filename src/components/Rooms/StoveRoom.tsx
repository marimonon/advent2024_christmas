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
const { toEntranceRoom, openDoor, getItem } = gameStateActions

const StoveRoom: React.FC = () => {
  const {
    gameState: { dooropen },
    dispatch,
  } = useGameState()

  const [snowman, setSnowman] = useState(false)

  return (
    <div>
      {/* <Comment>雪だるま「お外に出たーい！」</Comment> */}
      <StrawberryImage
        css={strawCss}
        onClick={() => dispatch(getItem("Berry"))}
      />
      {/* <BigSnowmanImage css={bigSnowCss} /> */}
      <FirewoodImage css={fireWoodCss} />
      <FireImage css={fireCss} />
      {(!dooropen || snowman) && <SnowmanImage css={smallSnowCss(snowman)} />}
      <DoorCloseImage
        css={doorCloseCss(dooropen)}
        onClick={() => {
          dispatch(openDoor())
          setSnowman(true)
        }}
      />
      <DoorOpenImage
        css={doorOpenCss(dooropen)}
        onClick={() => dispatch(toEntranceRoom())}
      />
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

const bigSnowCss = css`
  position: absolute;
  width: 54%;
  height: auto;
  top: 0%;
  left: 5%;
  z-index: 4;
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

const fireCss = css`
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 16%;
  right: 6%;
  z-index: 2;
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

const smallSnowCss = (snowman: boolean) => css`
  position: absolute;
  width: 36%;
  height: auto;
  bottom: 15%;
  left: 32%;
  z-index: 1;
  ${snowman &&
  css`
    animation: ${smallSnowMoveAnime} 2s forwards;
  `};
`

const doorCloseCss = (dooropen: boolean) => css`
  position: absolute;
  width: 32%;
  height: auto;
  top: 28%;
  left: 0%;
  z-index: 2;
  display: ${dooropen ? "none" : "block"};
`

const doorOpenCss = (dooropen: boolean) => css`
  position: absolute;
  width: 32%;
  height: auto;
  top: 28%;
  left: 0%;
  z-index: 2;
  display: ${dooropen ? "block" : "none"};
`

const stoveBgCss = css`
  width: 100%;
  height: 100%;
`
