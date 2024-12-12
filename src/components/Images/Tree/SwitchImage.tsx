type Props = {
  className?: string
  onClick?: () => void
}
const SwitchImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="135"
      height="150"
      viewBox="0 0 135 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g opacity="0.3">
        <rect width="135" height="150" rx="10" fill="#D9D9D9" />
        <rect x="23" y="21" width="89" height="111" fill="white" />
      </g>
    </svg>
  )
}

export default SwitchImage
