import React from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Container: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 600px;
        margin: 0px auto;
        background-color: #045662;
        overflow: hidden;
      `}
    >
      {children}
    </div>
  )
}

export default Container
