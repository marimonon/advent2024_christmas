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
  color: #fff;
  border: none;
  background: #3498db;
  box-shadow: 0 4px 0 #2880b9;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
