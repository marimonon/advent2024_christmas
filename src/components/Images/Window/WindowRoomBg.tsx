type Props = {
  className?: string
}
const WindowRoomBg: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="1000"
      height="1240"
      viewBox="0 0 1000 1240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_277_2620)">
        <rect width="1000" height="1240" fill="white" />
        <rect
          width="1000"
          height="1240"
          fill="url(#paint0_linear_277_2620)"
          fillOpacity="0.2"
        />
        <rect x="217" y="204" width="603" height="461" fill="#045662" />
        <rect
          x="217"
          y="204"
          width="603"
          height="461"
          stroke="#D9D9D9"
          strokeWidth="34"
        />
        <rect y="1054" width="1000" height="190" fill="#DDDDDD" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_277_2620"
          x1="500"
          y1="0"
          x2="500"
          y2="1240"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C4B108" stopOpacity="0.1" />
        </linearGradient>
        <clipPath id="clip0_277_2620">
          <rect width="1000" height="1240" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default WindowRoomBg
