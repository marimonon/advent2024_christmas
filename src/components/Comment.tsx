/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

type CommentProps = {
  children: React.ReactNode
}

const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  )
}

export default Comment
