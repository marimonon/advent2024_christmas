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
  porition: relative;
  width: 100vw;
  maw-width: 600px;
  height: 124vw;
  max-height: 744px;
`
