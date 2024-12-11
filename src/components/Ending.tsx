/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import EndTextImage from "./Images/Ending/EndTextImage"
import SantasImage from "./Images/Ending/SantasImage"
import NightImage from "./Images/Ending/NightImage"

const Ending: React.FC = () => {
  return (
    <div css={endBgCss}>
      <EndTextImage />
      <SantasImage />
      <NightImage />
    </div>
  )
}

export default Ending

const endBgCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #045662, #fff);
`
