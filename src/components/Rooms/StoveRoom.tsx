/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"
import BigSnowmanImage from "../Images/Stove/BigSnowmanImage"
import StrawberryImage from "../Images/Stove/StrawberryImage"
import FireImage from "../Images/Stove/FireImage"
import FirewoodImage from "../Images/Stove/FirewoodImage"

const StoveRoom: React.FC = () => {
  return (
    <div>
      <StrawberryImage css={strawCss} />
      <BigSnowmanImage css={bigSnowCss} />
      <FirewoodImage css={fireWoodCss} />
      <FireImage css={fireCss} />
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

const fireCss = css`
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 16%;
  right: 6%;
  z-index: 2;
`
const stoveBgCss = css`
  width: 100%;
  height: 100%;
`
