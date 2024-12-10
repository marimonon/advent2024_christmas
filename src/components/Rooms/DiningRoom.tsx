/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DiningBg from "../Images/Dining/DiningBg"
import CakeImage from "../Images/Dining/CakeImage"
import CakeFullImage from "../Images/Dining/CakeFullImage"
import CookieBagImage from "../Images/Dining/CookieBagImage"

const DiningRoom: React.FC = () => {
  return (
    <div css={offDiningCss}>
      <CookieBagImage css={cookieBagCss} />
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

const cookieBagCss = css`
  position: absolute;
  top: 56%;
  left: 61%;
  width: 12%;
  z-index: 2;
`

const cakeCss = css`
  position: absolute;
  top: 42%;
  left: 10%;
  width: 20%;
  z-index: 3;
`

const cakeFullCss = css`
  position: absolute;
  top: 42%;
  left: 10%;
  width: 20%;
  z-index: 4;
`

const diningBgCss = css`
  width: 100%;
  height: 100%;
`
