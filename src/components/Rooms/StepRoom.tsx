/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StepRoomBg from "../Images/Step/StepRoomBg"
import BearRibbonImage from "../Images/Step/BearRibbonImage"
import BearImage from "../Images/Step/BearImage"

const StepRoom: React.FC = () => {
  return (
    <div>
      <BearImage css={bearCss} />
      <BearRibbonImage css={bearRibbonCss} />
      <StepRoomBg css={stepBgCss} />
    </div>
  )
}

export default StepRoom

const bearCss = css`
  position: absolute;
  top: 44%;
  left: 10%;
  width: 30%;
  height: auto;
  z-index: 5;
`

const bearRibbonCss = css`
  position: absolute;
  top: 44%;
  left: 10%;
  width: 33%;
  height: auto;
  z-index: 6;
`

const stepBgCss = css`
  width: 100%;
  height: 100%;
`
