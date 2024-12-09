/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Btn: React.FC = ({ children, onClick }) => {
  return (
    <button onClick={onClick} css={btn}>
      {children}
    </button>
  )
}

export default Btn

const btn = css`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  color: #045662;
  border: none;
  background: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
