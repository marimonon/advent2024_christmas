/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import Comment from "../Comment"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"
import BigSnowmanImage from "../Images/Stove/BigSnowmanImage"
import StrawberryImage from "../Images/Stove/StrawberryImage"
import FireImage from "../Images/Stove/FireImage"
import FirewoodImage from "../Images/Stove/FirewoodImage"
import SnowmanImage from "../Images/Stove/SnowmanImage"
import DoorCloseImage from "../Images/Stove/DoorCloseImage"
import DoorOpenImage from "../Images/Stove/DoorOpenImage"

const StoveRoom: React.FC = () => {
  return (
    <div>
      <Comment>雪だるま「お外に出たーい！」</Comment>
      <StrawberryImage css={strawCss} />
      <BigSnowmanImage css={bigSnowCss} />
      <FirewoodImage css={fireWoodCss} />
      <FireImage css={fireCss} />
      <SnowmanImage css={smallSnowCss} />
      <DoorCloseImage css={doorCloseCss} />
      <DoorOpenImage css={doorOpenCss} />
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

const smallSnowCss = css`
  position: absolute;
  width: 36%;
  height: auto;
  bottom: 15%;
  left: 32%;
  z-index: 1;
`

const doorCloseCss = css`
  position: absolute;
  width: 32%;
  height: auto;
  top: 28%;
  left: 0%;
  z-index: 2;
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
