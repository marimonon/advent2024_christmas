/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import StoveRoom from "./Rooms/StoveRoom"
import Arrows from "./Arrows"

const Room: React.FC = () => {
  return (
    <div css={roomCss}>
      <Arrows />
      <StoveRoom />
    </div>
  )
}

export default Room

const roomCss = css`
  position: relative;
  width: 100%;
  height: 124vw;
  max-height: 744px;
`
