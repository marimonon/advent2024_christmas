/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"
import BigSnowmanImage from "../Images/Stove/BigSnowmanImage"
import StrawberryImage from "../Images/Stove/StrawberryImage"

const StoveRoom: React.FC = () => {
  return (
    <div>
      <StrawberryImage css={strawCss} />
      <BigSnowmanImage css={bigSnowCss} />
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
const stoveBgCss = css`
  width: 100%;
  height: 100%;
`
