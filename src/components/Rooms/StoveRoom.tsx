/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StoveRoomBg from "../Images/Stove/StoveRoomBg"

const StoveRoom: React.FC = () => {
  return (
    <div>
      <StoveRoomBg css={stoveBgCss} />
    </div>
  )
}

export default StoveRoom

const stoveBgCss = css`
  width: 100%;
  height: 100%;
`
