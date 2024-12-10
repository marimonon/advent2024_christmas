/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import StoveRoom from "./Rooms/StoveRoom"

const Room: React.FC = () => {
  return (
    <div css={roomCss}>
      <StoveRoom />
    </div>
  )
}

export default Room

const roomCss = css`
  width: 100vw;
  maw-width: 600px;
  height: 124vw;
  max-height: 744px;
`
