/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

type CommentProps = {
  children: React.ReactNode
}

const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <div css={commentCss}>
      <p css={commentTextCss}>{children}</p>
    </div>
  )
}

export default Comment

const commentCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`

const commentTextCss = css`
  font-size: 16px;
  color: #930606;
  background: rgba(255, 255, 255, 0.9);
  padding: 10%;
  border-radius: 12px;
`
