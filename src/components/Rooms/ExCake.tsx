/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ExCakeBg from "../Images/Dining/ExCakeBg"

const ExCake: React.FC = () => {
  return (
    <div>
      <ExCakeBg css={ExCakeBgCss} />
    </div>
  )
}

export default ExCake

const ExCakeBgCss = css`
  width: 100%;
  height: 100%;
`
