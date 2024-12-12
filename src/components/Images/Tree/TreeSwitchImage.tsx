type Props = {
  className?: string
  onClick?: () => void
}
const TreeSwitchImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="100"
      height="122"
      viewBox="0 0 100 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect
        y="43.6875"
        width="63.9897"
        height="34.3656"
        rx="12"
        fill="#C47908"
      />
      <rect
        x="35.4854"
        width="63.9897"
        height="34.3656"
        rx="12"
        fill="#C47908"
      />
      <rect
        x="35.4854"
        y="87.3672"
        width="63.9897"
        height="34.3656"
        rx="12"
        fill="#604106"
      />
      <rect
        x="74.4609"
        y="43.6875"
        width="25.0142"
        height="34.3656"
        rx="12"
        fill="#C47908"
      />
      <rect x="76.75" y="97.8906" width="23" height="8" fill="white" />
    </svg>
  )
}

export default TreeSwitchImage
