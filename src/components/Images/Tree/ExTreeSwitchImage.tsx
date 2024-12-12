type Props = {
  className?: string
  onClick?: () => void
}
const ExTreeSwitchImage: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg
      width="75"
      height="145"
      viewBox="0 0 75 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect
        x="0.5"
        y="0.5"
        width="74"
        height="144"
        fill="url(#paint0_linear_283_3836)"
        fillOpacity="0.5"
        stroke="#D6D6D6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_283_3836"
          x1="37.5"
          y1="0"
          x2="37.5"
          y2="145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666666" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ExTreeSwitchImage
