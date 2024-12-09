/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Start: React.FC = () => {
  return (
    <div css={start}>
      <h1 css={title}>脱出ゲーム</h1>
      <button css={btn}>スタート</button>
    </div>
  )
}

export default Start

const start = css`
  text-align: center;
`
const title = css`
  font-size: 24px;
  color: #fff;
`
const btn = css`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  border: none;
  background: #3498db;
  box-shadow: 0 4px 0 #2880b9;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
