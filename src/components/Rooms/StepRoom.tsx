/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StepRoomBg from "../Images/Step/StepRoomBg"

const StepRoom: React.FC = () => {
  return (
    <div>
      <StepRoomBg css={stepBgCss} />
    </div>
  )
}

export default StepRoom

const stepBgCss = css`
  width: 100%;
  height: 100%;
`
