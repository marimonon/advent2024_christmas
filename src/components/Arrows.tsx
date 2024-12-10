/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ArrowImage from "./Images/ArrowImage"

const Arrows: React.FC = () => {
  return (
    <>
      <div css={leftCss}>
        <ArrowImage />
      </div>
      <div css={rightCss}>
        <ArrowImage />
      </div>
      <div css={bottomCss}>
        <ArrowImage />
      </div>
    </>
  )
}

export default Arrows

const leftCss = css`
  position: absolute;
  top: 48%;
  z-index: 100;
`

const rightCss = css`
  position: absolute;
  top: 48%;
  right: 0;
  transform: rotate(180deg);
  z-index: 100;
`

const bottomCss = css`
  position: absolute;
  bottom: 0;
  left: 48%;
  transform: rotate(-90deg);
  z-index: 100;
`
