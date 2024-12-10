/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"
import BigSnowmanImage from "../Images/Stove/BigSnowmanImage"

const StoveRoom: React.FC = () => {
  return (
    <div>
      <BigSnowmanImage css={bigSnowCss} />
      <StoveRoomBg css={stoveBgCss} />
    </div>
  )
}

export default StoveRoom

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
