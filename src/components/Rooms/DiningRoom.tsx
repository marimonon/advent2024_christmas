/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DiningBg from "../Images/Dining/DiningBg"
import CakeImage from "../Images/Dining/CakeImage"
import CakeFullImage from "../Images/Dining/CakeFullImage"

const DiningRoom: React.FC = () => {
  return (
    <div css={offDiningCss}>
      <CakeImage css={cakeCss} />
      <CakeFullImage css={cakeFullCss} />
      <DiningBg css={diningBgCss} />
    </div>
  )
}

export default DiningRoom
const offDiningCss = css`
  // opacity: 0.1;
  pointer-events: none;
`
const diningBgCss = css`
  width: 100%;
  height: 100%;
`
